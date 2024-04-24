import { expect, test } from "vitest"

import * as fc from "fast-check"

import right from "."

test("[right] (either) creates a `right` value", () => {
	fc.assert(
		fc.property(fc.anything(), x => {
			expect(right(x)).toEqual({
				_tag: "Right",
				right: x,
			})
		}),
	)
})
