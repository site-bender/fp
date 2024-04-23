import type { JSONObject, JSONValue } from "../types"
import type { Option, Some } from "../../option/types"

import head from "../../array/head"
import isNone from "../../option/isNone"
import map from "../../option/map"

type PathOrF = (
	path: string | Array<string | number>,
) => (
	or: Option<JSONValue>,
) => (source: Option<JSONObject | JSONValue>) => Option<JSONValue>

const pathOr: PathOrF = path => or => source => {
	if (isNone(source)) {
		return or
	}

	const segments = Array.isArray(path) ? path : path.split(".")

	const segment = head(segments)

	// Should map return None when value is undefined?
	const out = map(
		value => (value as JSONObject)[(segment as Some<string | number>).value],
	)(source)

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
