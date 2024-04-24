import type { Option } from "../types"

import isNone from "../isNone"
import some from "../some"
import tail from "../../array/tail"

type Traverse = <T, R>(
	f: (t: T) => Option<R>,
) => (self: Array<T>) => Option<Array<R>>

const traverse: Traverse = f => xs => {
	if (xs.length < 1) return some([])

	const initialResult = f(xs[0])

	if (isNone(initialResult)) return initialResult

	const out = [initialResult.value]

	for (let x of tail(xs)) {
		const intermediateResult = f(x)

		if (isNone(intermediateResult)) return intermediateResult

		out.push(intermediateResult.value)
	}

	return some(out)
}

export default traverse
