import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function Footer() {
	return (
        <Stack 
            direction={"row"} 
            justifyContent={"space-between"} 
            sx={{mt: 3}}>
            
            <Typography variant="caption" color={'secondary'}>2022 © Robert Belan</Typography>
            <Typography variant="caption" color={'secondary'}>Kontakt</Typography>
        </Stack>
	);
}