import { test, expect } from "vitest"

import * as fc from "fast-check"

import none from "../none"
import pipe from "../../functions/pipe"
import some from "../some"

import match from "."

test("[match] (option) matches none", () => {
	fc.assert(
		fc.property(fc.anything(), fc.anything(), (onNone, onSome) => {
			const either = none

			const result = pipe(
				(_: any) => onSome,
				match(() => onNone),
			)(either)

			expect(result).toEqual(onNone)
		}),
	)
})

test("[match] (option) matches some", () => {
	fc.assert(
		fc.property(
			fc.anything(),
			fc.anything(),
			fc.anything(),
			(value, onNone, onSome) => {
				const either = some(value)

				const result = pipe(
					(_: any) => onSome,
					match(() => onNone),
				)(either)

				expect(result).toEqual(onSome)
			},
		),
	)
})
