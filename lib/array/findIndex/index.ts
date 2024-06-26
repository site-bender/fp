import { Option, none, some } from "../..//option"

export type FindIndexF = <T>(
	f: (i: T) => boolean,
) => (arr: Array<T>) => Option<number>

const findIndex: FindIndexF = f => arr => {
	const index = arr.findIndex(f)

	return index === -1 ? none : some(index)
}

export default findIndex
