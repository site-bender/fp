import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import pipe from "../../functions/pipe"
import right from "../right"

import traverseAccumulate from "."

test("[traverseAccumulate] (either) supports identity", () => {
	fc.assert(
		fc.property(fc.array(fc.anything()), as => {
			const result = pipe(
				as,
				pipe(
					right,
					traverseAccumulate((a, _) => a),
				),
			)

			expect(result).toEqual(right(as))
		}),
	)
})

test("[traverseAccumulate] (either) transforms value", () => {
	fc.assert(
		fc.property(fc.array(fc.integer()), as => {
			const result = pipe(
				as,
				pipe(
					(n: number) => right(String(n)),
					traverseAccumulate((a, _) => a),
				),
			)

			expect(result).toEqual(right(as.map(n => String(n))))
		}),
	)
})

test("[traverseAccumulate] (either) returns left for [left]", () => {
	fc.assert(
		fc.property(fc.array(fc.anything(), { minLength: 1 }), array => {
			const result = pipe(
				array,
				pipe(
					() => left(false),
					traverseAccumulate<boolean>((a, b) => a && b),
				),
			)

			expect(result).toEqual(left(false))
		}),
	)
})

test("[traverseAccumulate] (either) returns left for [_, left]", () => {
	const result = pipe(
		[1, 2, 3],
		pipe(
			(n: number) => (n < 2 ? right(n) : left(false)),
			traverseAccumulate((a, b) => a && b),
		),
	)

	expect(result).toEqual(left(false))
})

test("[traverseAccumulate] (either) exits early for an initial left value", () => {
	const result = pipe(
		[1, 2, 3],
		pipe(
			(n: number) => (n == 1 ? left(false) : right(n)),
			traverseAccumulate((a, b) => a && b),
		),
	)

	expect(result).toEqual(left(false))
})
