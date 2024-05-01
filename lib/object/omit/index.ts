export type OmitF = <
	Object extends Record<PropertyKey, any>,
	Keys extends Array<keyof Object>,
>(
	keys: Keys,
) => (obj: Object) => Omit<Object, Keys[number]>

const omit: OmitF = keys => obj =>
	Object.fromEntries(
		Object.entries(obj).filter(([key]) => !keys.includes(key)),
	) as any

export default omit
