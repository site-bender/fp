import type { Either } from "../types"

import isLeft from "../isLeft"
import left from "../left"
import map from "../map"
import pipe from "../../functions/pipe"
import right from "../right"
import tail from "../../array/tail"

type TraverseAccumulate = <E>(
	concat: (e: E, e2: E) => E,
) => <A, B>(f: (a: A) => Either<E, B>) => (as: Array<A>) => Either<E, Array<B>>

const traverseAccumulate: TraverseAccumulate = concat => f => as => {
	if (as.length < 1) return right([])

	const first = pipe(
		f(as[0]),
		map(_ => [_]),
	)
	const rest = tail(as)

	return rest.reduce((acc, val) => {
		const eitherB = f(val)

		if (isLeft(acc) && isLeft(eitherB))
			return left(concat(acc.left, eitherB.left))
		/* v8 ignore next 3 */ else if (isLeft(acc)) return acc
		else if (isLeft(eitherB)) return eitherB
		else return right([...acc.right, eitherB.right])
	}, first)
}

export default traverseAccumulate
