import { test, expect } from "vitest"

import * as fc from "fast-check"

import pipe from "../../functions/pipe"
import none from "../none"
import some from "../some"

import flatMap from "."

const f = (x: number) => some(x + 1)

test("[flatMap] (option) supports left identity", () => {
	fc.assert(
		fc.property(fc.integer(), value => {
			const pure = some(value)

			expect(pipe(pure, flatMap(f))).toEqual(f(value))
		}),
	)
})

test("[flatMap] (option) supports right identity", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			const pure = some(value)

			expect(pipe(pure, flatMap(some))).toEqual(pure)
		}),
	)
})

test("[flatMap] (option) supports associativity", () => {
	fc.assert(
		fc.property(fc.integer(), a => {
			const pure = some(a)

			const lhs = pipe(pipe(pure, flatMap(f)), flatMap(f))
			const rhs = pipe(
				pure,
				flatMap(_ => pipe(f(_), flatMap(f))),
			)

			expect(lhs).toEqual(rhs)
		}),
	)
})

test("[flatMap] (option) returns a none unchanged", () => {
	expect(pipe(none, flatMap<number, number>(f))).toEqual(none)
})
