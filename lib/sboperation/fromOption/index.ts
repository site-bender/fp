import { SbOperation } from "../types"
import { Option } from "../../option"
import { right } from "../../either"

type FromOption = <A>(o: Option<A>) => SbOperation<A>

const fromOption: FromOption = o => right(o)

export default fromOption
