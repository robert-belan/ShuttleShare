import React from 'react';
import { Typography, Button, useTheme } from '@mui/material';

function Settings(props) {
    
    const theme = useTheme();
    const modeToggle = props.modeToggle;
    
    return (<>
        <Typography sx={{my: 4}} variant="h3" align="center">Settings</Typography>
        
        Turn on
        <Button 
            sx={{
                mx: 1, 
                bgcolor: 'background.contrast',
                color: 'background.default'
            }} 
            onClick={modeToggle} 
            variant="outlined"
            size='small'
            >
            {theme.palette.mode === 'dark' ? 'light' : 'dark'}
        </Button>
        mode
        </>);
}

export default Settings;