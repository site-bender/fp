import type { JSONObject } from "../types"

import { expect, test } from "vitest"

import none from "../../option/none"
import path from "."
import some from "../../option/some"

const obj: JSONObject = {
	members: [
		{
			name: "Bob",
			favoriteColors: ["black", "red"],
		},
		{
			name: "Jane",
			favoriteColors: ["chartreuse", "mauve", "pink"],
		},
	],
}

test("returns Some(value) when found", () => {
	expect(path("members")(some(obj))).toEqual(some(obj["members"]))
	expect(path(["members", 0, "name"])(some(obj))).toEqual(some("Bob"))
	expect(path("members.0.favoriteColors.1")(some(obj))).toEqual(some("red"))
})

test("returns None value when not found", () => {
	expect(path("members.2")(some(obj))).toEqual(none)
	expect(path("members.0.name.first")(some(obj))).toEqual(none)
})

test("returns None if source is None", () => {
	expect(path("members.2")(none)).toEqual(none)
})

test("returns None if path is empty", () => {
	expect(path("")(some(obj))).toEqual(none)
	expect(path([])(some(obj))).toEqual(none)
})
