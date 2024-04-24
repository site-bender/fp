import { test, expect } from "vitest"

import * as fc from "fast-check"

import none from "../none"
import pipe from "../../functions/pipe"
import some from "../some"

import traverse from "."

test("[traverse] (option) supports identity", () => {
	fc.assert(
		fc.property(fc.array(fc.anything()), xs => {
			const result = pipe(xs, pipe(some, traverse))

			expect(result).toEqual(some(xs))
		}),
	)
})

test("[traverse] (option) returns none for [none]", () => {
	const result = pipe(
		[1, 2, 3],
		traverse(() => none),
	)

	expect(result).toEqual(none)
})

test("[traverse] (array) returns none for [_, none]", () => {
	const result = pipe(
		[1, 2, 3],
		traverse(n => (n < 2 ? some(n) : none)),
	)

	expect(result).toEqual(none)
})
