import type { Option } from "../types"

import none from "../none"
import some from "../some"

type FromNullableF = <T>(x: T | null | undefined) => Option<T>
const fromNullable: FromNullableF = x => (x == null ? none : some(x))

export default fromNullable
