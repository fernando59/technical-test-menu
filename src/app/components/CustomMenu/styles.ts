import { SxProps, Theme } from '@mui/material'

export const styledMenu: SxProps<Theme> = {
	width: '600px',
}

export const styledTitle: SxProps<Theme> = {
	flex: 1,
	paddingLeft: 2,
}

export const styledMenuItem = (level: number): SxProps<Theme> => ({
	paddingLeft: `${level * 1.5}rem`,
	width: '100%',
	overflowX: 'auto',
})

export const styledMenuList: SxProps<Theme> = {
	paddingX: 1,
}

export const defaultBoxStyles = (
	boxStyles: SxProps<Theme> | undefined
): SxProps<Theme> => ({
	width: '350px',
	...boxStyles,
})
