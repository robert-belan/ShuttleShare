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
						primary: '#F5F5F5',
						secondary: '#B4BAC1',
						contrastText: '#F5F5F5'
					},
					error: {
						main: '#af3723',
					},
					background: {
						default: '#202020',
						contrast: '#F5F5F5',
						dark: '#202020'
					},
					typography: {
						fontFamily: 'Inconsolata, monospace'
					}
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
						contrastText: '#F5F5F5'
					},
					error: {
						main: '#af3723',
					},
					background: {
						default: '#F5F5F5',
						contrast: '#202020',
						dark: '#202020'
					},
					typography: {
						fontFamily: 'Inconsolata, monospace'
					}
				})
			},
		});
}