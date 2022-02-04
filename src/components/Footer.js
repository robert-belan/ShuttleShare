import React, { useState } from 'react';
import {
	Stack,
	Typography,
	Button
} from '@mui/material';

import Text from '../components/Text';
import Contacts from '../components/Contacts';


export default function Footer() {

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Stack
			direction={"row"}
			justifyContent={"space-between"}
			sx={{ mt: 3 }}
		>
			<Typography variant="caption" color={'secondary'}>2022 © Robert Belan</Typography>
			<Button size='small' color={'secondary'} onClick={handleClickOpen} sx={{ textTransform: 'none', fontWeight: 'normal' }}>
				<Text tid={"contact"} />
			</Button>
			<Contacts
				open={open}
				onClose={handleClose}
			/>
		</Stack>
	);
}