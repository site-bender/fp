import type { Option } from "../types"

import isNone from "../isNone"
import some from "../some"

type MapF = <A, B>(f: (a: A) => B) => (o: Option<A>) => Option<B>
const map: MapF = f => o => (isNone(o) ? o : some(f(o.value)))

export default map
