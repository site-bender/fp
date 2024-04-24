import { expect, test } from "vitest"

import * as fc from "fast-check"

import some from "."

test("[some] (options) creates a `some`", () => {
	fc.assert(
		fc.property(fc.anything(), x => {
			expect(some(x)).toEqual({
				_tag: "Some",
				value: x,
			})
		}),
	)
})
