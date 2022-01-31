import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Settings() {
    
    const theme = useTheme();
    
    return (
        <Typography sx={{my: 4}} variant="h3" align="center">Settings</Typography>

    );
}

export default Settings;