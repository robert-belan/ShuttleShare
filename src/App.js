import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';


//https://stackoverflow.com/questions/59145165/change-root-background-color-with-material-ui-theme
const theme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#96bec3',
    },
    secondary: {
      main: '#567166',
    },
    text: {
      primary: '#dde2d8',
    },
    error: {
      main: '#af3723',
    },
    background: {
        default: "#303030" 
    },
  },
});



export default function App() {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Toaster />
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="*" element={<NotFound />} />   {/* Catch-all route */}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}