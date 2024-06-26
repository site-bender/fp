import type { Either } from "../types"

import tail from "../../array/tail"
import isLeft from "../isLeft"
import right from "../right"

type Traverse = <E, A, B>(
	f: (a: A) => Either<E, B>,
) => (as: Array<A>) => Either<E, Array<B>>

const traverse: Traverse = f => as => {
	if (as.length < 1) return right([])

	const o = f(as[0])

	if (isLeft(o)) return o

	const out = [o.right]

	for (let a of tail(as)) {
		const o = f(a)

		if (isLeft(o)) return o

		out.push(o.right)
	}

	return right(out)
}

export default traverse
