import type { JSONObject, JSONValue } from "../types"
import type { Option } from "../../option/types"

import none from "../../option/none"
import pathOr from "../pathOr"

type PathF = (
	path: string | Array<string | number>,
) => (source: Option<JSONObject>) => Option<JSONValue>

const path: PathF = path => source => {
	return pathOr(path)(none)(source)
}

export default path
