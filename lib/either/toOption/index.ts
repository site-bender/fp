import { Option, none, some } from "../../option"
import isLeft from "../isLeft"
import { Either } from "../types"

type ToOption = <E, A>(either: Either<E, A>) => Option<A>

const toOption: ToOption = either =>
	isLeft(either) ? none : some(either.right)

export default toOption
