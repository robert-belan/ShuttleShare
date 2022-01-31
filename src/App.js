import React, { useState, useMemo, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { 
	Button,
	ThemeProvider, 
	createTheme, 
	Container, 
	Box, 
	CssBaseline, 
	useMediaQuery  } from '@mui/material';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// manages Dark/Light modes
// source: https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette
import { getDesignTokens } from '/src/configs/themes';
const ColorModeContext = createContext({ toggleColorMode });


export default function App() {

	const [mode, setMode] = useState('light');

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	const colorMode = useMemo( () => ({
		  toggleColorMode: () => {
			setMode((prevMode) => 
				prevMode === 'light' ? 'dark' : 'light'
			);
		  },
		}), []
	  );

	useEffect(() => {
		const message = theme.palette.mode === 'dark'
		? 'Hello darkness my old friend...'
		: 'Let there be light.';

		return toast( message, {
			duration: 3000,
			position: 'bottom-center',
			style: {
				backgroundColor: theme.palette.background.default,
				color: theme.palette.text.primary,
				border: `1px solid ${theme.palette.secondary.main}`
			},
			id: 'theme',
		});
	}, [mode])
	
	return (
		<>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Toaster />
					<BrowserRouter>

						<Box sx={{ mt: matches ? 2 : 5 }}>
							<Container>
								
								<Header />
								<Routes>
									<Route path="/" element={<Dashboard />} />
									<Route path="/about" element={<About />} />
									<Route path="/settings" element={<Settings modeToggle={colorMode.toggleColorMode} />} />
									<Route path="*" element={<NotFound />} />   {/* Catch-all route */}
								</Routes>

								<Footer  />

							</Container>
						</Box>

					</BrowserRouter>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	);
}