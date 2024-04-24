import { expect, test } from "vitest"

import none from "."

test("[none] (options) creates a `none`", () => {
	expect(none).toEqual({ _tag: "None" })
})
