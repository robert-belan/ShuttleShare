import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// MUI
import { 
	ThemeProvider, 
	createTheme, 
	Container, 
	Box, 
	CssBaseline, 
	useMediaQuery,
} from '@mui/material';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// Font families
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inconsolata';

// Localization
import { LanguageProvider } from './containers/LanguageContext';

// manages Dark/Light modes
// source: https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette
import { getDesignTokens } from './configs/themes';



export default function App() {

	const [mode, setMode] = useState( () => {
		if (localStorage.getItem("theme")) {
			return localStorage.getItem("theme");
		} else {
			return 'light';
		}
	} );
	
	// get theme's config object
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect( () => {
		localStorage.setItem("theme", mode);
	}, [mode])

	const toasterOptions = useMemo(() => {
		return {
			duration: 3000,
    		style: {
				background: theme.palette.background.light,
				color: theme.palette.secondary.main,
				border: `1px solid ${theme.palette.secondary.main}`,
			},
		}
	})


	
	return (<>
		<LanguageProvider>
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<Toaster toastOptions={toasterOptions} position='bottom-left' />
		<BrowserRouter>

			<Box sx={{ mt: matches ? 2 : 5 }}>
				<Container>	
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/about" element={<About />} />
						<Route path="/settings" element={<Settings handleThemeToggle={setMode} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer  />
				</Container>
			</Box>
			
		</BrowserRouter>
		</ThemeProvider>
		</LanguageProvider>
	</>);
}