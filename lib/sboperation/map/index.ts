import { pipe } from "../../functions"
import { map as eMap } from "../../either"
import { map as oMap } from "../../option"
import { SbOperation } from "../types"

type Map = <A, B>(f: (a: A) => B) => (self: SbOperation<A>) => SbOperation<B>

const map: Map = f => self => pipe(self, eMap(oMap(f)))

export default map
