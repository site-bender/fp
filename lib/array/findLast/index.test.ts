import { expect, test } from "vitest"
import { none, some } from "../..//option"

import findLast from "."

const arr = [1, 2, 3, 4, 5]

test("[findLast] (array) returns Some(item) for the last item when found", () => {
	expect(findLast<number>(n => n > 1)(arr)).toStrictEqual(some(5))
	expect(findLast<number>(n => n > 1 && n < 5)(arr)).toStrictEqual(some(4))
})

test("[findLast] (array) returns None when the item is not found", () => {
	expect(findLast<number>(n => n === 0)(arr)).toStrictEqual(none)
})
