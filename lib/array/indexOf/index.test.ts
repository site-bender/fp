import { expect, test } from "vitest"
import { none, some } from "../..//option"

import indexOf from "."

const arr = [1, 2, 3, 4, 5]

test("[indexOf] (array) returns Some(index) when the item is found", () => {
	expect(indexOf<number>(1)(arr)).toStrictEqual(some(0))
	expect(indexOf<number>(2)(arr)).toStrictEqual(some(1))
	expect(indexOf<number>(3)(arr)).toStrictEqual(some(2))
	expect(indexOf<number>(4)(arr)).toStrictEqual(some(3))
	expect(indexOf<number>(5)(arr)).toStrictEqual(some(4))
})

test("[indexOf] (array) returns None when the item is not found", () => {
	expect(indexOf<number>(0)(arr)).toStrictEqual(none)
	expect(indexOf<number>(6)(arr)).toStrictEqual(none)
})
