import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import right from "../right"
import pipe from "../../functions/pipe"

import flatMap from "."

const f = (x: number) => right(x + 1)

test("[flatMap] (either) supports left identity", () => {
	fc.assert(
		fc.property(fc.integer(), value => {
			const pure = right(value)

			expect(pipe(pure, flatMap(f))).toEqual(f(value))
		}),
	)
})

test("[flatMap] (either) supports right identity", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			const pure = right(value)

			expect(pipe(pure, flatMap(right))).toEqual(pure)
		}),
	)
})

test("[flatMap] (either) supports associativity", () => {
	fc.assert(
		fc.property(fc.integer(), a => {
			const pure = right(a)

			const lhs = pipe(pipe(pure, flatMap(f)), flatMap(f))
			const rhs = pipe(
				pure,
				flatMap(_ => pipe(f(_), flatMap(f))),
			)

			expect(lhs).toEqual(rhs)
		}),
	)
})

test("[flatMap] (either) returns a left value unchanged", () => {
	fc.assert(
		fc.property(fc.integer(), value => {
			const impure = left(value)

			expect(pipe(impure, flatMap<number, number, number>(f))).toEqual(impure)
		}),
	)
})
