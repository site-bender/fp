import { Either } from "../types"

const right = <A, E = never>(a: A): Either<E, A> => ({
	_tag: "Right",
	right: a,
})

export default right
