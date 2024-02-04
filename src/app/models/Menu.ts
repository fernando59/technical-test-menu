export interface BaseMenuData {
	key: string
	name: string
	title: string
	path: string
	parent: string | null
}

export interface MenuData extends BaseMenuData {}

export interface MenuDataFormat extends BaseMenuData {
	children?: MenuData[]
}
