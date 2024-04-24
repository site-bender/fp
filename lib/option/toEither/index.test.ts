import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../../either/left"
import none from "../none"
import right from "../../either/right"
import some from "../some"

import toEither from "."

test("[toEither] (option) returns a left for None", () => {
	fc.assert(
		fc.property(fc.anything(), value => {
			expect(toEither(() => value)(none)).toEqual(left(value))
		}),
	)
})

test("[toEither] (option) returns a right for a some", () => {
	fc.assert(
		fc.property(fc.anything(), fc.anything(), (forLeft, value) => {
			expect(toEither(() => forLeft)(some(value))).toEqual(right(value))
		}),
	)
})
