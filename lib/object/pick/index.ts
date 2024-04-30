import { JSONObject } from "../types"

export type PickF = (keys: Array<string>) => (obj: JSONObject) => JSONObject

const pick: PickF = keys => obj =>
	Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)))

export default pick
