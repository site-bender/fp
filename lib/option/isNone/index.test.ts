import { expect, test } from "vitest"

import none from "../../option/none"
import some from "../../option/some"

import isNone from "."

test("[isNone] (option) returns `true` when object is Left", () => {
	expect(isNone(none)).toBe(true)
})

test("[find] (option) returns `false` when object is not Left", () => {
	expect(isNone(some(""))).toBe(false)
})
