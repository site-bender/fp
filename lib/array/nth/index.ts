import { fromNullable, none } from "../../option"

export type NthF = (i: number) => <T>(arr: Array<T>) => Option<T>

const nth: NthF = i => arr =>
	i >= 0 && i < arr.length ? fromNullable(arr.at(i)) : none

export default nth
