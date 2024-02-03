import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
	Collapse,
	Menu,
	MenuItem,
	MenuList,
	PopoverVirtualElement,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { MenuData, MenuDataFormat } from '../models/Menu'
import { formatMenu } from '../utils/formatMenu'

interface Props {
	data: MenuData[]
	anchorEl?:
		| Element
		| (() => Element)
		| PopoverVirtualElement
		| (() => PopoverVirtualElement)
		| null
		| undefined
	handleClose: () => void
}

export const CustomMenu = ({ data, anchorEl, handleClose }: Props) => {
	const [openKeys, setOpenKeys] = useState<string[]>([])
	const newData = formatMenu(data)
	const handleClick = (key: string) => {
		if (openKeys.includes(key)) {
			setOpenKeys(openKeys.filter(openKey => openKey !== key))
		} else {
			setOpenKeys([...openKeys, key])
		}
	}

	const renderMenuItems = (items: MenuDataFormat[], level: number = 0) => {
		return items.map(item => (
			<div style={{ width: '100%' }} key={item.key}>
				<MenuItem
					onClick={() => handleClick(item.key)}
					style={{ paddingLeft: level * 20 }}
				>
					<Typography
						style={{ flex: 1 }}
						variant="body2"
						color="text.secondary"
					>
						{item.name}
					</Typography>
					{item.children &&
						item.children.length > 0 &&
						(openKeys.includes(item.key) ? <ExpandLess /> : <ExpandMore />)}
				</MenuItem>
				{item.children && item.children.length > 0 && (
					<Collapse
						in={openKeys.includes(item.key)}
						timeout="auto"
						unmountOnExit
					>
						<MenuList component="div" disablePadding>
							{renderMenuItems(item.children, level + 1)}
						</MenuList>
					</Collapse>
				)}
			</div>
		))
	}
	return (
		<>
			<Menu
				id="basic-menu"
				style={{ width: '600px' }}
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
				<MenuList style={{ width: '200px', paddingRight: 10, paddingLeft: 10 }}>
					{renderMenuItems(newData)}
				</MenuList>
			</Menu>
		</>
	)
}
