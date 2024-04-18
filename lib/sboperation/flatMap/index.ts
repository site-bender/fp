import { isLeft } from "../../either"
import { isNone } from "../../option"
import { SbOperation } from "../types"

type FlatMap = <A, B>(
	f: (a: A) => SbOperation<B>,
) => (self: SbOperation<A>) => SbOperation<B>

const flatMap: FlatMap = f => self =>
	isLeft(self)
		? (self as any)
		: isNone(self.right)
			? (self as any)
			: f(self.right.value)

export default flatMap
