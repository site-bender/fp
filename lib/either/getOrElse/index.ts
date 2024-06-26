import type { Either } from ".."

import isLeft from "../isLeft"

type GetOrElse = <T>(alt: () => T) => (self: Either<any, T>) => T
const getOrElse: GetOrElse = alt => self => (isLeft(self) ? alt() : self.right)

export default getOrElse
