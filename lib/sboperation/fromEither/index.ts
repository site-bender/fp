import { Either, isLeft, right } from "../../either"
import { some } from "../../option"
import { SbOperation } from "../types"

type FromEither = <A>(e: Either<string[], A>) => SbOperation<A>

const fromEither: FromEither = e =>
	isLeft(e) ? (e as any) : right(some(e.right))

export default fromEither
