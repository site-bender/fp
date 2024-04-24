import { test, expect } from "vitest"

import * as fc from "fast-check"

import left from "../left"
import pipe from "../../functions/pipe"
import right from "../right"

import match from "."

test("[match] (either) matches left", () => {
	fc.assert(
		fc.property(
			fc.anything(),
			fc.anything(),
			fc.anything(),
			(value, onLeft, onRight) => {
				const either = left(value)

				const result = pipe(
					(_: any) => onRight,
					match(_ => onLeft),
				)(either)

				expect(result).toEqual(onLeft)
			},
		),
	)
})

test("[match] (either) matches right", () => {
	fc.assert(
		fc.property(
			fc.anything(),
			fc.anything(),
			fc.anything(),
			(value, onLeft, onRight) => {
				const either = right(value)

				const result = pipe(
					(_: any) => onRight,
					match(_ => onLeft),
				)(either)

				expect(result).toEqual(onRight)
			},
		),
	)
})
