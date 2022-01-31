import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { 
	ThemeProvider, 
	createTheme, 
	useTheme, 
	Container, 
	Box, 
	CssBaseline, 
	useMediaQuery  } from '@mui/material';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {darkTheme} from '/src/configs/themes';

//https://stackoverflow.com/questions/59145165/change-root-background-color-with-material-ui-theme
const theme = createTheme({
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
			secondary: '#B4BAC1'
		},
		error: {
			main: '#af3723',
		},
		background: {
			default: "#202020"
		},
	},
});


export default function App() {

	const t = useTheme();

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
								<Route path="/help" element={<Help />} />
								<Route path="*" element={<NotFound />} />   {/* Catch-all route */}								
							</Routes>
							<Footer />

						</Container>
					</Box>

				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}