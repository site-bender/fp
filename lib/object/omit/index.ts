import { JSONObject } from "../types"

export type OmitF = (keys: Array<string>) => (obj: JSONObject) => JSONObject

const omit: OmitF = keys => obj =>
	Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)))

export default omit
