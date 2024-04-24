import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import pipe from "../../functions/pipe"
import right from "../right"

import allOf from "."

test("[allOf] (either) returns right(xs) on all succeeding", () => {
	fc.assert(
		fc.property(fc.array(fc.anything()), xs => {
			const result = pipe(xs, pipe(right, allOf))

			expect(result).toEqual(right(xs))
		}),
	)
})

test("[allOf] (either) returns left(xs) on one or more failures", () => {
	fc.assert(
		fc.property(fc.array(fc.anything(), { minLength: 1 }), xs => {
			const result = pipe(
				xs,
				pipe((a: any) => left([a]), allOf),
			)

			expect(result).toEqual(left(xs))
		}),
	)
})
