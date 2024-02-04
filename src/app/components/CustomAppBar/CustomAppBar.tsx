'use client'

import { AppBar, Box, IconButton, Typography } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { MenuService } from '../../services/MenuService'
import MenuIcon from '@mui/icons-material/Menu'
import { CustomMenu } from '../CustomMenu/CustomMenu'
import { MenuDataFormat } from '../../models/Menu'
import { StyledAppBar, StyledIcon } from './styles'

type AnchorState = {
	first: HTMLElement | null
	second: HTMLElement | null
}

export const CustomAppBar = () => {
	const [anchorEl, setAnchorEl] = useState<AnchorState>({
		first: null,
		second: null,
	})

	const data = MenuService.getDataMenu()
	const dataExample2 = MenuService.getDataExample()

	const handleMenu = (
		event: MouseEvent<HTMLElement>,
		menu: 'first' | 'second'
	) => {
		setAnchorEl({ ...anchorEl, [menu]: event.currentTarget })
	}

	const handleClose = (menu: 'first' | 'second') => () => {
		setAnchorEl({ ...anchorEl, [menu]: null })
	}

	const handleClick = (item: MenuDataFormat) => {
		console.log({ item })
	}

	return (
		<AppBar component="nav">
			<Box sx={StyledAppBar}>
				<Typography variant="h6" component="a">
					Menu Test
				</Typography>
				<Box>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						onClick={e => handleMenu(e, 'first')}
						sx={StyledIcon}
					>
						<MenuIcon />
					</IconButton>
					<IconButton
						size="large"
						edge="start"
						color="default"
						onClick={e => handleMenu(e, 'second')}
						sx={StyledIcon}
					>
						<MenuIcon />
					</IconButton>
				</Box>
			</Box>
			<CustomMenu
				data={data}
				handleClose={handleClose('first')}
				anchorEl={anchorEl.first}
				handleClickItem={handleClick}
			/>
			<CustomMenu
				data={dataExample2}
				handleClose={handleClose('second')}
				anchorEl={anchorEl.second}
				handleClickItem={handleClick}
			/>
		</AppBar>
	)
}
