import { Either, InferEitherTuple } from "../types"

import identity from "../../functions/identity"
import pipe from "../../functions/pipe"
import traverse from "../traverse"

function sequence<E, T extends Array<Either<E, any>>>(
	self: [...T],
): Either<E, InferEitherTuple<T>>
function sequence<E, U>(self: Array<Either<E, U>>) {
	return pipe(self, traverse(identity))
}

export default sequence
