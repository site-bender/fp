import { MULTIPLICATION_IDENTITY } from "../../../constants"

import pipe from "../../../functions/pipe"
import reduce from "../../reduce"

type MultiplyF = (numbers: Array<number>) => number

const multiply: MultiplyF = pipe(
	MULTIPLICATION_IDENTITY,
	reduce((a, b: number) => a * b),
)

export default multiply
