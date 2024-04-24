import { expect, test } from "vitest"
import { none, some } from "../..//option"

import lastIndexOf from "."

const arr = [1, 2, 1, 2, 1, 2]

test("[lastIndexOf] (array) returns Some(last index) when the item is found", () => {
	expect(lastIndexOf<number>(1)(arr)).toStrictEqual(some(4))
	expect(lastIndexOf<number>(2)(arr)).toStrictEqual(some(5))
})

test("[lastIndexOf] (array) returns None when the item is not found", () => {
	expect(lastIndexOf<number>(0)(arr)).toStrictEqual(none)
	expect(lastIndexOf<number>(3)(arr)).toStrictEqual(none)
})
