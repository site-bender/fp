import type { Either } from "../types"

import pipe from "../../functions/pipe"
import traverseAccumulate from "../traverseAccumulate"

type AllOf = <E, A, B>(
	f: (a: A) => Either<E[], B>,
) => (as: A[]) => Either<E[], B[]>

const allOf: AllOf = f =>
	pipe(
		f,
		traverseAccumulate((a, b) => [...a, ...b]),
	)

export default allOf
