import React from 'react';
import { List, Typography, useTheme } from '@mui/material';

function About() {

    const theme = useTheme();

    return (<>
        <Typography sx={{my: 4}} variant="h3" align="center">About</Typography>
        
        {/* Content */}
        <Typography paragraph align="center" sx={{my: 4 , mb: 8, fontStyle: "italic"}}>
            ShareShuttle - Know who got your shuttle dirty
            </Typography>

        <Typography variant='h5' component="h5" paragraph sx={{my: 4 }}>
            Tato aplikace slouží pro orientační správu zapůjčených raketoplánů.
            </Typography>
        
        <Typography paragraph>
            O každém zapůjčení raketoplánu <span style={{color: 'error.primary'}}>vytvořte</span> záznam. Ke každému nájemníku astronautovi (dále jen astronautovi) uveďte následující údaje: 
            </Typography>

        <List sx={{listStyle: "disc", listStylePosition: "inside", my: 3}}>
            <li><span style={{fontStyle: "italic"}}>Jméno</span> - maximální počet znaků 50.</li>
            <li><span style={{fontStyle: "italic"}}>Příjmení</span> - maximální počet znaků 50.</li>
            <li><span style={{fontStyle: "italic"}}>Datum narození</span> - uveďte datum v předepsaném formátu. Formát uvidíte v kolonce, kde zadáváte datum.</li>
            <li><span style={{fontStyle: "italic"}}>Superschopnost</span> - uveďte superschopnost, kterou osoba vlastní - maximální počet znaků 50.</li>
            <li><span style={{fontStyle: "italic"}}>Zapůjčeno</span> - uveďte datum v předepsaném formátu. Formát uvidíte v kolonce, kde zadáváte datum.</li>
            <li><span style={{fontStyle: "italic"}}>Vráceno</span> - pokud raketoplán není vrácený, <Typography component='span' sx={{color: 'warning.main'}}> nechte kolonku prázdnou</Typography>, jinak Vám to nedovolí záznam uložit.</li>
            <li><span style={{fontStyle: "italic"}}>Poznámka</span> - nepovinné - zde patří cokoliv, co usoudíte, že nepatří jinam.</li>
        </List>


        {/* Dislaimer: */}
        <Typography variant='subtitle2' sx={{mt: 10, fontStyle: "italic"}}>
            Disclaimer:
            </Typography>

        <Typography paragraph>
            Údaje zde uvedené neberte vážně. Až na Elvise jsou veškeré údaje smyšlené.
            </Typography>
    </>);
}

export default About;