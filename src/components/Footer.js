import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
    const theme = useTheme();
	return (
        <Stack 
            direction={"row"} 
            justifyContent={"space-between"} 
            sx={{mt: 3}}>
            
            <Typography variant="caption" color={'text.contrastText'}>2022 © Robert Belan</Typography>
            <Typography variant="caption" color={'text.contrastText'}>Kontakt</Typography>
        </Stack>
	);
}