import React from 'react';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function About() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Typography sx={{my: 4}} variant="h3" align={matches ? "right" : "center"}>About</Typography>
    );
}

export default About;