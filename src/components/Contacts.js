import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import Text from '../components/Text';

import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';



const contacts = {
	phone: '+420 733 347 482',
	email: 'info@robertbelan.com',
	linkedin: 'linkedin.com/in/robertbelan/',
	github: 'https://github.com/robert-belan',
};



export default function Contacts(props) {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};

	// MUI's component style config
	const dialogSx = {
		'& .MuiDialog-paper': {
			backgroundColor: 'background.default',
			color: 'text.primary'
		},
		'& .MuiDialogTitle-root': {
			backgroundColor: 'primary.dark'
		},
		'& .MuiDialogTitle-root': {
			backgroundColor: 'primary.main',
			color: 'text.contrastText'
		}
	}

	return (
		<Dialog onClose={handleClose} open={open} sx={dialogSx}>
			<DialogTitle><Text tid={"contact"} /></DialogTitle>
			<List sx={{ pt: 0 }}>

				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<EmailIcon>E-mail</EmailIcon>
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={contacts.email} />
				</ListItem>

				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<CallIcon>Phone</CallIcon>
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={contacts.phone} secondary={<Text tid={'footer_contacts_email'} />} />
				</ListItem>

				<ListItem button component="a" href='https://www.linkedin.com/in/robertbelan/'>
					<ListItemAvatar>
						<Avatar>
							<LinkedInIcon>LinkedIn</LinkedInIcon>
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={contacts.linkedin} />
				</ListItem>

				<ListItem button component="a" href='https://github.com/robert-belan'>
					<ListItemAvatar>
						<Avatar>
							<GitHubIcon>Github</GitHubIcon>
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={contacts.github} />
				</ListItem>

			</List>
		</Dialog>
	);
}
