import React from 'react';
import { Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import toast from 'react-hot-toast';




function Settings(props) {

    const theme = useTheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const changeThemeMessage = theme.palette.mode === 'dark'
        ? 'Let there be light...'
        : 'Hello darkness my old friend...';

    // props.handleThemeToggle is actually setMode resides at App component
    const themeToggle = () => {
        props.handleThemeToggle((prevMode) => prevMode === 'light' ? 'dark' : 'light');


        toast( changeThemeMessage, {
            duration: 3000,
            position: 'bottom-left',
            style: {
                backgroundColor: theme.palette.background.dark,
                color: theme.palette.secondary.main,
                border: `1px solid ${theme.palette.secondary.main}`,
                height: '2rem',
            },
            id: 'theme',
        });
    }


    return (<>
        <Typography sx={{my: 4}} variant="h3" align="center">Settings</Typography>
        
        Turn on
        <Button 
            sx={{
                mx: 1, 
                bgcolor: 'background.contrast',
                color: 'background.default'
            }} 
            onClick={themeToggle} 
            variant="outlined"
            size='small'
            >
            {theme.palette.mode === 'dark' ? 'light' : 'dark'}
        </Button>
        mode
        </>);
}

export default Settings;