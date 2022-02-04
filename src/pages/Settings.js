import React from 'react';

import toast from 'react-hot-toast';

import { 
    Typography, 
    Button, 
    useTheme, 
    useMediaQuery, 
    Box, 
    Stack } from '@mui/material';

import LanguageSelector from '../components/LanguageSelector';
import Text from '../components/Text';



function Settings(props) {

    const theme = useTheme();

    // toast's notification text 
    const changeThemeMessage = theme.palette.mode === 'dark'
        ? <Text tid={"toast_theme_light"} />
        : <Text tid={"toast_theme_dark"} />;

    // props.handleThemeToggle is actually setMode resides at App component
    const themeToggle = () => {
        props.handleThemeToggle((prevMode) => prevMode === 'light' ? 'dark' : 'light');

        toast( changeThemeMessage, {
            duration: 3000,
            id: 'theme',
        });
    }

    return (<>
        <Typography sx={{my: 4}} variant="h3" align="center">
            <Text tid={"settings_mainHeader"} />
        </Typography>
        
        <Stack spacing={3} justifyContent="center" sx={{ marginLeft: 'auto', mb: 5}} >
            <Box>
                <Text tid={"settings_themeToggle_part1"} /> {/* Turn on */}
                <Button 
                    sx={{ color: 'secondary.main', borderColor: 'secondary.main'}} 
                    onClick={themeToggle} 
                    variant="outlined"
                    size='small'
                    >
                    {theme.palette.mode === 'dark' ? <Text tid={"theme_title_light"} /> : <Text tid={"theme_title_dark"} />}
                </Button>
                <Text tid={"settings_themeToggle_part2"} /> {/*mode.*/}
            </Box>

            <Box>
                <Text tid={"language_option"} /><LanguageSelector />
            </Box>
        </Stack>
    </>);
}

export default Settings;