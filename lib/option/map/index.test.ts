import { test, expect } from "vitest"

import * as fc from "fast-check"

import identity from "../../functions/identity"
import none from "../none"
import pipe from "../../functions/pipe"
import some from "../some"

import map from "."

test("[map] (option) supports identity", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			const option = some(value)

			expect(map(identity)(option)).toEqual(option)
		}),
	)
})

test("[map] (option) supports composition", () => {
	fc.assert(
		fc.property(fc.integer(), value => {
			const inc = (n: number) => n + 1
			const option = some(value)

			const piped = pipe(option, map(inc), map(inc))

			const composed = pipe(
				option,
				map(n => inc(inc(n))),
			)

			expect(piped).toEqual(composed)
		}),
	)
})

test("[map] (option) returns a none unchanged", () => {
	expect(pipe(none, map(identity))).toEqual(none)
})
