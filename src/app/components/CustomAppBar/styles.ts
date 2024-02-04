import { SxProps, Theme } from '@mui/material'

export const StyledAppBar: SxProps<Theme> = {
	display: 'flex',
	justifyContent: 'space-between',
	paddingX: { xs: '20px', sm: '50px' },
	alignItems: 'center',
}

export const StyledIcon: SxProps<Theme> = {
	mr: 2,
}
