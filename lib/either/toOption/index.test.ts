import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import none from "../../option/none"
import right from "../right"
import some from "../../option/some"

import toOption from "."

test("[toOption] (either) returns none for a left", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			expect(toOption(left(value))).toEqual(none)
		}),
	)
})

test("[toOption] (either) returns some for a right", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			expect(toOption(right(value))).toEqual(some(value))
		}),
	)
})
