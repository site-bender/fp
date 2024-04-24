import { expect, test } from "vitest"

import left from "../left"
import right from "../right"

import sequence from "."

test("[sequence] (either) returns left if contains left", () => {
	expect(
		sequence([right(5), left("no"), right(7), right(3), left("nope")]),
	).toEqual(left("no"))
})

test("[sequence] (either) returns Option<Array<T>> from Array<Option<T>>", () => {
	expect(sequence([right(5), right(1), right(7), right(3), right(9)])).toEqual(
		right([5, 1, 7, 3, 9]),
	)
})
