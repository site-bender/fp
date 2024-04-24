import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			exclude: [
				"temp/**",
				"index.ts",
				"lib/array/index.ts",
				"lib/either/index.ts",
				"lib/functions/index.ts",
				"lib/object/index.ts",
				"lib/option/index.ts",
				"lib/predicates/index.ts",
				"lib/string/index.ts",
				"lib/utilities/index.ts",
			],
			include: ["lib/**"],
			provider: "v8",
		},
	},
})
