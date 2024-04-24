import { expect, test } from "vitest"
import { none, some } from "../..//option"

import head from "."

const arr = [1, 2, 3, 4, 5]

test("[head] (array) returns Some(head) when array length > 0", () => {
	expect(head(arr)).toStrictEqual(some(1))
})

test("[head] (array) returns None when the array is empty", () => {
	expect(head([])).toStrictEqual(none)
})
