import { expect, test } from "vitest"

import removeAll from "."

const arr = [1, 2, 3, 4, 5]

test("[removeAll] (array) removes the passed item from the array", () => {
	expect(removeAll<number>(1)(arr)).toStrictEqual([2, 3, 4, 5])
	expect(removeAll<number>(2)(arr)).toStrictEqual([1, 3, 4, 5])
	expect(removeAll<number>(3)(arr)).toStrictEqual([1, 2, 4, 5])
	expect(removeAll<number>(4)(arr)).toStrictEqual([1, 2, 3, 5])
	expect(removeAll<number>(5)(arr)).toStrictEqual([1, 2, 3, 4])
})

test("[removeAll] (array) removes all occurrences of the passed item from the array", () => {
	expect(removeAll<number>(1)([1, 2, 1, 2, 1])).toStrictEqual([2, 2])
	expect(removeAll<number>(2)([1, 2, 1, 2, 1])).toStrictEqual([1, 1, 1])
})

test("[removeAll] (array) returns the array unchanged if item not found", () => {
	expect(removeAll<number>(0)(arr)).toStrictEqual([1, 2, 3, 4, 5])
	expect(removeAll<number>(6)(arr)).toStrictEqual([1, 2, 3, 4, 5])
})
