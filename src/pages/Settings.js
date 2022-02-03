import React from 'react';
import { 
    Typography, 
    Button, 
    useTheme, 
    useMediaQuery, 
    Box, 
    Stack } from '@mui/material';
import toast from 'react-hot-toast';
import LanguageSelector from '../components/LanguageSelector';
import Text from '../components/Text';


function Settings(props) {

    const theme = useTheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const changeThemeMessage = theme.palette.mode === 'dark'
        ? <Text tid={"toast_theme_light"} />
        : <Text tid={"toast_theme_dark"} />;

    // props.handleThemeToggle is actually setMode resides at App component
    const themeToggle = () => {
        props.handleThemeToggle((prevMode) => prevMode === 'light' ? 'dark' : 'light');

        toast( changeThemeMessage, {
            duration: 3000,
            position: 'bottom-left',
            style: {
                backgroundColor: theme.palette.background.dark,
                color: theme.palette.secondary.main,
                border: `1px solid ${theme.palette.secondary.main}`,
                height: '2rem',
            },
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