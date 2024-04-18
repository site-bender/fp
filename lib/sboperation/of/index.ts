import { right } from "../../either"
import { some } from "../../option"
import { SbOperation } from "../types"

type Of = <A>(a: A) => SbOperation<A>

const of: Of = a => right(some(a))

export default of
