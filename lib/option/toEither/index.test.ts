import { describe, test, expect } from "vitest"
import * as fc from "fast-check"
import none from "../none"
import toEither from "."
import { left, right } from "../../either"
import some from "../some"

describe("Option toEither", () => {
	test("returns a left for None", () => {
		fc.assert(
			fc.property(fc.anything(), value => {
				expect(toEither(() => value)(none)).toEqual(left(value))
			}),
		)
	})

	test("returns a right for a some", () => {
		fc.assert(
			fc.property(fc.anything(), fc.anything(), (forLeft, value) => {
				expect(toEither(() => forLeft)(some(value))).toEqual(right(value))
			}),
		)
	})
})
