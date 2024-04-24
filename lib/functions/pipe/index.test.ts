import { test, expect } from "vitest"

import pipe from "."

const double = (x: number) => x * 2

test("[pipe] (functions) pipes the value through", () => {
	expect(pipe(2)).toEqual(2)
	expect(pipe(2, double)).toEqual(4)
	expect(pipe(2, double, double)).toEqual(8)
	expect(pipe(2, double, double, double)).toEqual(16)
	expect(pipe(2, double, double, double, double)).toEqual(32)
	expect(pipe(2, double, double, double, double, double)).toEqual(64)
	/* @ts-expect-error */
	expect(pipe(2, double, double, double, double, double, double)).toEqual(128)
})
