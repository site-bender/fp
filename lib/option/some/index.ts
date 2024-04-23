import type { Option } from "../types"

type SomeF = <T>(x: T) => Option<T>
const some: SomeF = x => ({ _tag: "Some", value: x })

export default some
