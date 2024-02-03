export interface MenuData {
	key: string
	name: string
	title: string
	path: string
	parent: string | null
}
export interface MenuDataFormat {
	key: string
	name: string
	title: string
	path: string
	parent: string | null
	children?: MenuData[]
}
