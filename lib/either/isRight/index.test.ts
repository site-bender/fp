import { expect, test } from "vitest"

import left from "../../either/left"
import right from "../../either/right"

import isRight from "."

test("[isRight] (either) returns `true` when object is Right", () => {
	expect(isRight(right(""))).toBe(true)
})

test("[find] (either) returns `false` when object is not Right", () => {
	expect(isRight(left(""))).toBe(false)
})
