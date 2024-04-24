import { expect, test } from "vitest"

import left from "../../either/left"
import right from "../../either/right"

import isLeft from "."

test("[isLeft] (either) returns `true` when object is Left", () => {
	expect(isLeft(left(""))).toBe(true)
})

test("[find] (either) returns `false` when object is not Left", () => {
	expect(isLeft(right(""))).toBe(false)
})
