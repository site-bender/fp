import { expect, test } from "vitest"
import { none, some } from "../../option"

import lastIndexOfMatch from "."

const arr = ["bob", "is", "the", "bob", "of", "bobs"]

test("[lastIndexOfMatch] (array) returns Some(last index) when the match is found", () => {
	expect(lastIndexOfMatch(/bob/)(arr)).toStrictEqual(some(5))
	expect(lastIndexOfMatch(/bobs/)(arr)).toStrictEqual(some(5))
	expect(lastIndexOfMatch(/is/)(arr)).toStrictEqual(some(1))
})

test("[lastIndexOfMatch] (array) returns None when the item is not found", () => {
	expect(lastIndexOfMatch(/joe/)(arr)).toStrictEqual(none)
})
