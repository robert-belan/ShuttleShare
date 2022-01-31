import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { ButtonGroup, Divider, Stack, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme  } from '@mui/material/styles';


export default function Header() {

    const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (<>
                <Stack 
                    direction={ {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"} } 
                    spacing={ {xs: 2, sm: 2} }
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent={matches ? "space-between" : "center"}
                    alignItems="center"
                >
                    <Button 
                        component={RouterLink} 
                        to="/" 
                        variant=""
                        >
                            ShuttleShare</Button>
                            
                        
                    <ButtonGroup 
                        size="medium" 
                        disableRipple={true} 
                        fullWidth={matches ? false : true}
                        variant="outlined"
                        color="secondary"
                        >
                        <Button component={RouterLink} to="/">Dashboard</Button>
                        <Button component={RouterLink} to="/about">About</Button>
                        <Button component={RouterLink} to="/help">Help</Button>
                    </ButtonGroup>
    
                </Stack>

    </>)
}