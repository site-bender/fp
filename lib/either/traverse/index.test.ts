import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import pipe from "../../functions/pipe"
import right from "../right"

import traverse from "."

test("[traverse] (either) supports identity", () => {
	fc.assert(
		fc.property(fc.array(fc.anything()), as => {
			const result = pipe(as, pipe(right, traverse))

			expect(result).toEqual(right(as))
		}),
	)
})

test("[traverse] (either) transforms value", () => {
	fc.assert(
		fc.property(fc.array(fc.integer()), as => {
			const result = pipe(
				as,
				pipe((n: number) => right(String(n)), traverse),
			)

			expect(result).toEqual(right(as.map(n => String(n))))
		}),
	)
})

test("[traverse] (either) returns left for [left]", () => {
	fc.assert(
		fc.property(fc.array(fc.anything(), { minLength: 1 }), array => {
			const result = pipe(
				array,
				traverse(() => left(false)),
			)

			expect(result).toEqual(left(false))
		}),
	)
})

test("[traverse] (either) returns left for [_, left]", () => {
	const result = pipe(
		[1, 2, 3],
		traverse(n => (n < 2 ? right(n) : left(false))),
	)

	expect(result).toEqual(left(false))
})
