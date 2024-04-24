import { expect, test } from "vitest"

import none from "../../option/none"
import some from "../../option/some"

import sequence from "."

test("[sequence] (option) returns none if contains none", () => {
	expect(sequence([some(5), none, some(7), some(3), none])).toEqual(none)
})

test("[sequence] (option) returns Option<Array<T>> from Array<Option<T>>", () => {
	expect(sequence([some(5), some(1), some(7), some(3), some(9)])).toEqual(
		some([5, 1, 7, 3, 9]),
	)
})
