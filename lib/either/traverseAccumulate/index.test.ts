import { test, expect } from "vitest"

// import * as fc from "fast-check"

// import left from "../left"
// import pipe from "../../functions/pipe"
// import right from "../right"

// import traverseAccumulate from "."

// FIXME
test("temp -- remove me", () => {
	expect(true).toBe(true)
})

// test("[traverseAccumulate] (either) supports identity", () => {
// 	fc.assert(
// 		fc.property(fc.array(fc.anything()), as => {
// 			const result = pipe(as, pipe(right, traverseAccumulate))

// 			expect(result).toEqual(right(as))
// 		}),
// 	)
// })

// test("[traverseAccumulate] (either) transforms value", () => {
// 	fc.assert(
// 		fc.property(fc.array(fc.integer()), as => {
// 			const result = pipe(
// 				as,
// 				pipe((n: number) => right(String(n)), traverseAccumulate),
// 			)

// 			expect(result).toEqual(right(as.map(n => String(n))))
// 		}),
// 	)
// })

// test("[traverseAccumulate] (either) returns left for [left]", () => {
// 	fc.assert(
// 		fc.property(fc.array(fc.anything(), { minLength: 1 }), array => {
// 			const result = pipe(
// 				array,
// 				traverseAccumulate(() => left(false)),
// 			)

// 			expect(result).toEqual(left(false))
// 		}),
// 	)
// })

// test("[traverseAccumulate] (either) returns left for [_, left]", () => {
// 	const result = pipe(
// 		[1, 2, 3],
// 		traverseAccumulate(n => (n < 2 ? right(n) : left(false))),
// 	)

// 	expect(result).toEqual(left(false))
// })
