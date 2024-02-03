'use client'

import { AppBar, Box, IconButton, Typography } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { MenuService } from '../services/MenuService'
import MenuIcon from '@mui/icons-material/Menu'
import { CustomMenu } from './CustomMenu'

export const CustomAppBar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const getData = () => {
		const data = MenuService.getDataMenu()
		return data
	}

	return (
		<>
			<AppBar position="static" component="nav">
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						paddingX: '50px',
						alignItems: 'center',
					}}
				>
					<Typography variant="h6" component="a">
						Menu Test
					</Typography>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleMenu}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
				</Box>
				<CustomMenu
					data={getData()}
					handleClose={handleClose}
					anchorEl={anchorEl}
				/>
			</AppBar>
		</>
	)
}
