import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#292D3E',
		},
		secondary: {
			main: '#CA896C',
		},
		text: {
			primary: '#dde2d8',
			secondary: '#4589CB'
		},
		error: {
			main: '#af3723',
		},
		background: {
			default: "#202020"
		},
	},
});






/**
<Box sx={{ bgcolor: 'primary.main' }}>…
<Box sx={{ bgcolor: 'secondary.main' }}>…
<Box sx={{ bgcolor: 'error.main' }}>…
<Box sx={{ bgcolor: 'warning.main' }}>…
<Box sx={{ bgcolor: 'info.main' }}>…
<Box sx={{ bgcolor: 'success.main' }}>…
<Box sx={{ bgcolor: 'text.primary' }}>…
<Box sx={{ bgcolor: 'text.secondary' }}>…
<Box sx={{ bgcolor: 'text.disabled' }}>…
 */

/*
primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
*/