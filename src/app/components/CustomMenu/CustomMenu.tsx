import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
	Box,
	Collapse,
	Menu,
	MenuItem,
	MenuList,
	PopoverVirtualElement,
	SxProps,
	Theme,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { MenuData, MenuDataFormat } from '../../models/Menu'
import { formatMenu } from '../../utils/formatMenu'
import {
	defaultBoxStyles,
	styledMenuItem,
	styledMenuList,
	styledTitle,
} from './styles'

interface Props {
	data: MenuData[]
	anchorEl:
		| Element
		| (() => Element)
		| PopoverVirtualElement
		| (() => PopoverVirtualElement)
		| null
	handleClose: () => void
	// eslint-disable-next-line no-unused-vars
	handleClickItem?: (item: MenuDataFormat) => void
	boxStyles?: SxProps<Theme>
}

export const CustomMenu = ({
	data,
	anchorEl,
	handleClose,
	handleClickItem,
	boxStyles,
}: Props) => {
	const [openKeys, setOpenKeys] = useState<string[]>([])
	const newData = formatMenu(data)

	const hasChildren = (item: MenuDataFormat) =>
		(item.children && item.children.length > 0) ?? false

	const handleClick = (item: MenuDataFormat) => {
		const key = item.key
		const isOpen = openKeys.includes(item.key)

		if (isOpen) {
			setOpenKeys(openKeys.filter(openKey => openKey !== key))
		} else {
			setOpenKeys([...openKeys, key])
		}

		if (item.children && item.children.length === 0) {
			if (handleClickItem) {
				handleClickItem(item)
			}
		}
	}

	const ExpandIcon = ({
		hasChildren,
		isOpen,
	}: {
		hasChildren: boolean
		isOpen: boolean
	}) => {
		if (!hasChildren) {
			return null
		}

		return isOpen ? <ExpandLess /> : <ExpandMore />
	}

	const renderMenuItems = (items: MenuDataFormat[], level: number = 0) => {
		return items.map(item => {
			const isOpen = openKeys.includes(item.key)
			return (
				<Box sx={defaultBoxStyles(boxStyles)} key={item.key}>
					<MenuItem
						onClick={() => handleClick(item)}
						sx={styledMenuItem(level)}
					>
						<Typography sx={styledTitle} variant="body2" color="text.secondary">
							{item.name}
						</Typography>
						<ExpandIcon hasChildren={hasChildren(item)} isOpen={isOpen} />
					</MenuItem>
					{hasChildren(item) && (
						<Collapse in={isOpen} timeout="auto" unmountOnExit>
							<MenuList component="div" disablePadding>
								{renderMenuItems(item.children!, level + 1)}
							</MenuList>
						</Collapse>
					)}
				</Box>
			)
		})
	}

	return (
		<>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				keepMounted
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuList sx={styledMenuList}>{renderMenuItems(newData)}</MenuList>
			</Menu>
		</>
	)
}
