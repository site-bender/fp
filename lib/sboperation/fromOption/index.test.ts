import { describe, test, expect } from "vitest"
import * as fc from "fast-check"
import { right } from "../../either"
import { none, some } from "../../option"
import fromOption from "."

describe("SBOperation fromOption", () => {
	test("some", () => {
		fc.assert(
			fc.property(fc.anything(), value => {
				const opt = some(value)
				expect(fromOption(opt)).toEqual(right(opt))
			}),
		)
	})

	test("none", () => {
		expect(fromOption(none)).toEqual(right(none))
	})
})
