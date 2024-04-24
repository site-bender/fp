import { test, expect } from "vitest"

import none from "../none"
import some from "../some"

import fromNullable from "."

const arr: Array<string> = []
const bool = false
const nil = null
const num = 0
const obj = {}
const str = ""
const undef = undefined

test("[fromNullable] (option) returns Some(value) when value not nullable", () => {
	expect(fromNullable(arr)).toEqual(some(arr))
	expect(fromNullable(bool)).toEqual(some(bool))
	expect(fromNullable(num)).toEqual(some(num))
	expect(fromNullable(obj)).toEqual(some(obj))
	expect(fromNullable(str)).toEqual(some(str))
})

test("[fromNullable] (option) returns None when value nullable", () => {
	expect(fromNullable(nil)).toEqual(none)
	expect(fromNullable(undef)).toEqual(none)
})
