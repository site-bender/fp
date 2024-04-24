import { expect, test } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import pipe from "../../functions/pipe"
import right from "../right"

import getOrElse from "."

test("[getOrElse] (either) returns the right value unchanged", () => {
	fc.assert(
		fc.property(fc.anything(), fc.anything(), (value, alt) => {
			const result = pipe(
				right(value),
				getOrElse(() => alt),
			)

			expect(result).toEqual(value)
		}),
	)
})

test("[getOrElse] (either) returns the alt value for a left", () => {
	fc.assert(
		fc.property(fc.anything(), fc.anything(), (value, alt) => {
			const result = pipe(
				left(value),
				getOrElse(() => alt),
			)

			expect(result).toEqual(alt)
		}),
	)
})
