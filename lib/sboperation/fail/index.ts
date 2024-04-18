import { SbOperation } from "../types"
import { left } from "../../either"

type Fail = (error: string) => SbOperation<never>

const fail: Fail = error => left([error])

export default fail
