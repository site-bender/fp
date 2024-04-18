import { describe, test, expect } from "vitest"
import * as fc from "fast-check"
import map from "."
import { identity, pipe } from "../../functions"
import { some } from "../../option"
import { right } from "../../either"

describe("SBOperation map", () => {
	test("identity", () => {
		fc.assert(
			fc.property(fc.anything(), value => {
				const option = right(some(value))
				expect(map(identity)(option)).toEqual(option)
			}),
		)
	})

	test("composition", () => {
		fc.assert(
			fc.property(fc.integer(), value => {
				const inc = (n: number) => n + 1
				const option = right(some(value))

				const piped = pipe(option, map(inc), map(inc))

				const composed = pipe(
					option,
					map(n => inc(inc(n))),
				)

				expect(piped).toEqual(composed)
			}),
		)
	})
})
