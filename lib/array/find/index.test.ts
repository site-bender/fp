import { expect, test } from "vitest"
import { none, some } from "../../option"

import find from "."

const arr = [1, 2, 3, 4, 5]

test("[find] (array) returns Some(item) when the item is found", () => {
	expect(find<number>(n => n === 3)(arr)).toStrictEqual(some(3))
	expect(find<number>(n => n > 1)(arr)).toStrictEqual(some(2))
})

test("[find] (array) returns None when the item is not found", () => {
	expect(find<number>(n => n === 0)(arr)).toStrictEqual(none)
})
