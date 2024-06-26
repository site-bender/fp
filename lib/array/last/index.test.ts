import { expect, test } from "vitest"
import { none, some } from "../..//option"

import last from "."

const arr = [1, 2, 3, 4, 5]

test("[join] (array) returns Some(last) when array length > 0", () => {
	expect(last(arr)).toStrictEqual(some(5))
})

test("[join] (array) returns None when the array is empty", () => {
	expect(last([])).toStrictEqual(none)
})
