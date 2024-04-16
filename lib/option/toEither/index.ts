import { Option, isNone } from ".."
import { Either, right, left } from "../../either"

type ToEither = <E>(onLeft: () => E) => <A>(o: Option<A>) => Either<E, A>

const toOption: ToEither = onLeft => self =>
	isNone(self) ? left(onLeft()) : right(self.value)

export default toOption
