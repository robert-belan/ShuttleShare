export function getDesignTokens(mode) {
	return (
		{
			palette: {
				mode,
				...(mode === 'dark' 
				? {
					// palette values for dark mode
					primary: {
						main: '#292D3E',
					},
					secondary: {
						main: '#CA896C',
					},
					text: {
						primary: '#dde2d8',
						secondary: '#B4BAC1',
						contrastText: '#dde2d8'
					},
					error: {
						main: '#af3723',
					},
					background: {
						default: '#202020',
						'contrast': '#dde2d8'
					},
				}
				: {
					// palette values for light mode
					primary: {
						main: '#292D3E',
					},
					secondary: {
						main: '#CA896C',
					},
					text: {
						primary: '#202020',
						secondary: '#5C5C5C',
						contrastText: '#dde2d8'
					},
					error: {
						main: '#af3723',
					},
					background: {
						default: '#dde2d8',
						'contrast': '#202020'
					},
				})
			},
		});
}






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