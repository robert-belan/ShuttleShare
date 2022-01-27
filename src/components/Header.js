import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Header() {

    return (<>
            <Box sx={{
                px: 5,
                m: 5,
                border: "1px solid #96bec3",
                borderRadius: "3px",
                height: '10vh',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Button component={RouterLink} to="/" variant="outlined">Headquarters</Button>                
                <Stack 
                    direction="row" 
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button component={RouterLink} to="/" variant="outlined">Dashboard</Button>
                    <Button component={RouterLink} to="/about" variant="outlined">About App</Button>
                    <Button component={RouterLink} to="/help" variant="outlined">Help</Button>
                </Stack>
            </Box>
    </>)
}