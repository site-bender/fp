import { expect, expectTypeOf, test } from "vitest"

import left from "../left"
import right from "../right"

import sequence from "."
import { Either } from "../types"

test("[sequence] (either) returns left if contains left", () => {
	expect(
		sequence([right(5), left("no"), right(7), right(3), left("nope")]),
	).toEqual(left("no"))
})

test("[sequence] (either) returns Option<Array<T>> from Array<Option<T>>", () => {
	expect(sequence([right(5), right(1), right(7), right(3), right(9)])).toEqual(
		right([5, 1, 7, 3, 9]),
	)
})

test("[sequence] (either) returns typed heterogenous array", () => {
	const result = sequence([
		right(1),
		right(true),
		right("hello"),
		right({ a: "a" }),
	])

	expectTypeOf(result).toMatchTypeOf<
		Either<unknown, [number, boolean, string, { a: string }]>
	>()
})
