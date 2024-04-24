import { test, expect } from "vitest"

import * as fc from "fast-check"

import identity from "../../functions/identity"
import pipe from "../../functions/pipe"
import right from "../right"

import map from "."

test("[map] (either) supports identity", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			const either = right(value)
			expect(map(identity)(either)).toEqual(either)
		}),
	)
})

test("[map] (either) supports composition", () => {
	fc.assert(
		fc.property(fc.integer(), value => {
			const inc = (n: number) => n + 1
			const some = right(value)

			const piped = pipe(some, map(inc), map(inc))

			const composed = pipe(
				some,
				map(n => inc(inc(n))),
			)

			expect(piped).toEqual(composed)
		}),
	)
})
