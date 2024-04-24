import { expect, test } from "vitest"

import * as fc from "fast-check"

import left from "."

test("[left] (either) creates a `left` value", () => {
	fc.assert(
		fc.property(fc.anything(), x => {
			expect(left(x)).toEqual({
				_tag: "Left",
				left: x,
			})
		}),
	)
})
