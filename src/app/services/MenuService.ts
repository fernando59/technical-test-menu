import data from '@/app/data/data.json'
import dataExample from '@/app/data/example.json'
import { MenuData } from '../models/Menu'

class _MenuService {
	/**
	 * Allows to get data from json menu
	 * @returns List of menu
	 */
	getDataMenu(): MenuData[] {
		return data as MenuData[]
	}
	/**
	 * Allows to get data for example from json menu
	 * @returns List of menu
	 */
	getDataExample(): MenuData[] {
		return dataExample as MenuData[]
	}
}

export const MenuService = new _MenuService()
