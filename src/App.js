import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { 
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

export default function App() {

	const [mode, setMode] = useState( () => {
		if (localStorage.getItem("theme")) {
			return localStorage.getItem("theme");
		} else {
			return 'light';
		}
	} );
		
	useEffect( () => {
		localStorage.setItem("theme", mode);
	}, [mode])

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	
	return (
		<>
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
									<Route path="/settings" element={<Settings handleThemeToggle={setMode} />} />
									<Route path="*" element={<NotFound />} />   {/* Catch-all route */}
								</Routes>

								<Footer  />

							</Container>
						</Box>

					</BrowserRouter>
				</ThemeProvider>
		</>
	);
}