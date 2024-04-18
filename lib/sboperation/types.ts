import { Either } from "../either"
import { Option } from "../option"

export type SbOperation<A> = Either<string[], Option<A>>
