import { ADDITION_IDENTITY } from "../../../constants"
import pipe from "../../../functions/pipe"
import reduce from "../../reduce"

type SumF = (self: Array<number>) => number

const sum: SumF = pipe(
	ADDITION_IDENTITY,
	reduce((a, b: number) => a + b),
)

export default sum
