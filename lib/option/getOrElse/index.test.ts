import { expect, test } from "vitest"

import * as fc from "fast-check"

import none from "../none"
import pipe from "../../functions/pipe"
import some from "../some"

import getOrElse from "."

test("[getOrElse] (option) returns the some value", () => {
	fc.assert(
		fc.property(fc.anything(), fc.anything(), (value, alt) => {
			const result = pipe(
				some(value),
				getOrElse(() => alt),
			)

			expect(result).toEqual(value)
		}),
	)
})

test("[getOrElse] (option) returns the alt value for a left", () => {
	fc.assert(
		fc.property(fc.anything(), alt => {
			const result = pipe(
				none,
				getOrElse(() => alt),
			)

			expect(result).toEqual(alt)
		}),
	)
})
