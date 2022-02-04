import React from 'react';

import { List, Typography, useTheme } from '@mui/material';

import Text from '../components/Text';




function About() {

    const theme = useTheme();

    return (
        <>
        <Typography sx={{my: 4}} variant="h3" align="center"><Text tid={"about_mainHeader"} /></Typography>
        
        {/* Content */}
        <Typography paragraph align="center" sx={{my: 4 , mb: 8, fontStyle: "italic"}}>
            <Text tid={"about_subHeader"} />
            </Typography>

        <Typography variant='h5' component="h5" paragraph sx={{my: 4 }}>
            <Text tid={"about_description"} />
            </Typography>
        
        <Typography paragraph>
            <Text tid={"about_instruction"} />
            </Typography>

        <List sx={{listStyle: "disc", listStylePosition: "inside", my: 3}}>
            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_firstName_title"} />
                </span> 
                    <Text tid={"instruction_firstName_desc"} />
            </li>
            
            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_lastName_title"} />
                </span> 
                    <Text tid={"instruction_lastName_desc"} />
            </li>

            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_birth_title"} />
                </span> <Text tid={"instruction_birth_desc"} />
            </li>

            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_superpower_title"} />
                </span> 
                    <Text tid={"instruction_superpower_desc"} />
            </li>

            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_borrowed_title"} />
                </span> 
                    <Text tid={"instruction_borrowed_desc"} />
            </li>

            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_returned_title"} />
                </span> 
                    <Text tid={"instruction_returned_desc1"} />
                <Typography component='span' sx={{color: 'warning.main'}}>
                    <Text tid={"instruction_returned_desc2"} />
                </Typography>
                <Text tid={"instruction_returned_desc3"} />
            </li>

            <li>
                <span style={{fontStyle: "italic"}}>
                    <Text tid={"instruction_note_title"} />
                </span>
                    <Text tid={"instruction_note_desc"} />
            </li>
        </List>


        {/* Dislaimer: */}
        <Typography variant='subtitle2' sx={{mt: 10, fontStyle: "italic"}}>
           <Text tid={"disclaimer_title"} />
            </Typography>

        <Typography paragraph sx={{ mb: 5 }}>
            <Text tid={"disclaimer_description"} />
            </Typography>
    </>);
}

export default About;