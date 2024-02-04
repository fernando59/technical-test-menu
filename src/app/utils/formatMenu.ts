import { MenuData, MenuDataFormat } from '../models/Menu'

type MenuMap = {
	[key: string]: MenuDataFormat
}

export const formatMenu = (items: MenuData[]) => {
	let menu: MenuDataFormat[] = []
	let menuMap: MenuMap = {}

	items.forEach(item => {
		menuMap[item.key] = { ...item, children: [] }
	})

	items.forEach(item => {
		if (item.parent) {
			if (menuMap[item.parent]) {
				menuMap[item.parent].children!.push(menuMap[item.key])
			}
		} else {
			menu.push(menuMap[item.key])
		}
	})

	return menu
}
