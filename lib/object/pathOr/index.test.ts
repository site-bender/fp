import type { JSONObject } from "../types"

import { expect, test } from "vitest"

import none from "../../option/none"
import some from "../../option/some"

import pathOr from "."

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

test("[pathOr] (object) returns Some(value) when found", () => {
	expect(pathOr("members")(some("nope"))(some(obj))).toEqual(
		some(obj["members"]),
	)
	expect(pathOr(["members", 0, "name"])(some("nope"))(some(obj))).toEqual(
		some("Bob"),
	)
	expect(pathOr("members.0.favoriteColors.1")(some("nope"))(some(obj))).toEqual(
		some("red"),
	)
})

test("[pathOr] (object) returns the or value when not found", () => {
	expect(pathOr("members.2")(some("nope"))(some(obj))).toEqual(some("nope"))
	expect(pathOr("members.0.name.first")(some("nope"))(some(obj))).toEqual(
		some("nope"),
	)
})

test("[pathOr] (object) returns or if source is None", () => {
	expect(pathOr("members.2")(some("nope"))(none)).toEqual(some("nope"))
})

test("[pathOr] (object) returns or if path is empty", () => {
	expect(pathOr("")(some("nope"))(none)).toEqual(some("nope"))
	expect(pathOr([])(some("nope"))(none)).toEqual(some("nope"))
})
