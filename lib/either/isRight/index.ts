import type { Either, Right } from "../types"

const isRight = <A>(x: Either<any, A>): x is Right<A> => x._tag === "Right"

export default isRight
