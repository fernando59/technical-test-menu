import data from '@/app/data/data.json'
import { MenuData } from '../models/Menu'

class _MenuService {
	/**
	 * Allows to get data from json menu
	 * @returns List of menu
	 */
	getDataMenu(): MenuData[] {
		return data as MenuData[]
	}
}

export const MenuService = new _MenuService()
