import { Either } from "../types"
import { Option } from "../../option/types"

import isLeft from "../isLeft"
import none from "../../option/none"
import some from "../../option/some"

type ToOption = <E, A>(either: Either<E, A>) => Option<A>

const toOption: ToOption = either =>
	isLeft(either) ? none : some(either.right)

export default toOption
