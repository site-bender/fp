/* v8 ignore */

import type { Either, Left, Right } from "./types"

import ap from "./ap"
import flatMap from "./flatMap"
import isLeft from "./isLeft"
import isRight from "./isRight"
import left from "./left"
import right from "./right"
import map from "./map"
import match from "./match"
import traverseAccumulate from "./traverseAccumulate"
import getOrElse from "./getOrElse"
import allOf from "./allOf"

export {
	type Either,
	type Left,
	type Right,
	left,
	right,
	isLeft,
	isRight,
	ap,
	match,
	map,
	flatMap,
	getOrElse,
	traverseAccumulate,
	allOf,
}
