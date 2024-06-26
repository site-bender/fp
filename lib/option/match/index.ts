import type { Option } from "../types"

import isNone from "../isNone"

type Match = <B>(
	onNone: () => B,
) => <A>(onSome: (a: A) => B) => (option: Option<A>) => B

const match: Match = onNone => onSome => option =>
	isNone(option) ? onNone() : onSome(option.value)

export default match
