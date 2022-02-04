import React from 'react';

import { NavLink, Link as RouterLink } from 'react-router-dom';

import {
	ButtonGroup,
	Stack,
	Button,
	useMediaQuery
} from '@mui/material';

import { useTheme, makeStyles } from '@mui/styles';
import Text from '../components/Text';

const useStyles = makeStyles({
	button: {
		'&.active': {
			backgroundColor: 'rgba(212,160,137,0.2)'
		}
	}
})



export default function Header() {

	const theme = useTheme();
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (<>
		<Stack
			direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
			spacing={{ xs: 2, sm: 2 }}
			justifyContent={matches ? "space-between" : "center"}
			alignItems="center"
		>
			<Button
				component={RouterLink}
				to="/"
				variant=""
				size="large"
			>
				ShuttleShare</Button>


			<ButtonGroup
				size="medium"
				fullWidth={matches ? false : true}
				variant="outlined"
				color="secondary"
			>

				<Button className={classes.button} component={NavLink} to="/"><Text tid={"nav_dashboard"} /></Button>
				<Button className={classes.button} component={NavLink} to="/about"><Text tid={"nav_about"} /></Button>
				<Button className={classes.button} component={NavLink} to="/settings"><Text tid={"nav_settings"} /></Button>
			</ButtonGroup>

		</Stack>

	</>)
}