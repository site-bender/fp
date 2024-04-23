import type { Option } from "../types"
import type { Either } from "../../either/types"

import isNone from "../isNone"
import left from "../../either/left"
import right from "../../either/right"

type ToEither = <E>(onLeft: () => E) => <A>(o: Option<A>) => Either<E, A>

const toOption: ToEither = onLeft => self =>
	isNone(self) ? left(onLeft()) : right(self.value)

export default toOption
