import { describe, test, expect } from "vitest"
import * as fc from "fast-check"
import { left, right } from "../../either"
import fromEither from "../fromEither"
import { some } from "../../option"

describe("SBOperation fromEither", () => {
	test("right", () => {
		fc.assert(
			fc.property(fc.anything(), value => {
				const either = right(value)
				expect(fromEither(either)).toEqual(right(some(value)))
			}),
		)
	})

	test("left", () => {
		fc.assert(
			fc.property(fc.array(fc.string()), value => {
				const either = left(value)

				expect(fromEither(either)).toEqual(either)
			}),
		)
	})
})
