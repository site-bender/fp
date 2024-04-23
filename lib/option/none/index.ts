import type { Option } from "../types"

const none: Option<never> = { _tag: "None" }

export default none
