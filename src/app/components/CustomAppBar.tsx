'use client'

import { AppBar } from '@mui/material'
import { useState } from 'react'
import { MenuService } from '../services/MenuService'
import { formatMenu } from '../utils/formatMenu'

export const CustomAppBar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const getData = () => {
		var data = MenuService.getDataMenu()
		const newData = formatMenu(data)
		return newData
	}

	return (
		<>
			<AppBar>Hello from material</AppBar>
		</>
	)
}
