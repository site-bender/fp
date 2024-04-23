export type JSONValue =
	| string
	| number
	| boolean
	| null
	| JSONArray
	| { [key: string]: JSONValue }

export interface JSONObject {
	[k: string]: JSONValue
}

export interface JSONArray extends Array<JSONValue> {}
