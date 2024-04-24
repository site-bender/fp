import type { JSONObject, JSONValue } from "../types"
import type { Option } from "../../option/types"

import flatMap from "../../option/flatMap"
import head from "../../array/head"
import isNone from "../../option/isNone"
import pipe from "../../functions/pipe"
import some from "../../option/some"

type PathOrF = (
	path: string | Array<string | number>,
) => (
	or: Option<JSONValue>,
) => (source: Option<JSONObject>) => Option<JSONValue>

const pathOr: PathOrF = path => or => source => {
	if (isNone(source)) {
		return or
	}

	const segments = Array.isArray(path) ? path : path.split(".")

	const out = pipe(
		head(segments),
		flatMap(segment =>
			pipe(
				source,
				flatMap(value =>
					Array.isArray(value)
						? some(value[segment as number])
						: some(value[segment as number]),
				),
			),
		),
	)

	if (isNone(out) || out.value == null) {
		return or
	}

	const [, ...tail] = segments

	if (tail.length && !isNone(out) && typeof out.value !== "object") {
		return or
	}

	return tail.length ? pathOr(tail)(or)(out) : out
}

export default pathOr
