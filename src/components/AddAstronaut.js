import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Text from '../components/Text';

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useTheme,
} from '@mui/material';

import { db } from '../firebaseConfig';
import { child, push, set, remove } from 'firebase/database';

const initialState = {
	firstName: "",
	lastName: "",
	birthDate: "",
	superPower: "",
	rent: "",
	returned: "",
	note: ""
}

export default function AddAstronaut(props) {

	const [state, setState] = useState(initialState);
	const theme = useTheme();

	useEffect(() => {
		if ( mode === "edit") {
			setState({
				firstName: props.rowData.colFN,
				lastName: props.rowData.colLN,
				birthDate: props.rowData.colB,
				superPower: props.rowData.colS,
				rent: props.rowData.colRt,
				returned: props.rowData.colRtnd,
				note: props.rowData.colNt
			});
		}
	}, []);

	const { firstName, lastName, birthDate, superPower, rent, returned, note } = state;

	const mode = props.mode;
	const id = props.rowData.id;

	let texts = {}

	function handleInputChange(event) {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();

		if ( mode !== "remove" && (!firstName || !lastName || !birthDate || !superPower || !rent) ) {
			toast.error("I need to know everything. \nNames, birth and particularly superpower!");
		
		} else if (mode === "add") {
			push(db, state)
				.then(() => {
					props.close(); // closes dialog window
					toast.success(texts.toastNotif);
				})
				.catch(() => { toast.error("Adding failed. Try it later, please.") });
		
		} else if (mode === "edit") {
			set(child(db, id), state)
				.then(() => {
					props.close(); // closes dialog window
					toast.success(texts.toastNotif);
				})
				.catch(() => { toast.error("Editing failed. Try it later, please.") })
		
		} 
	
		if (mode === "remove") {
			remove(child(db, id));
			props.close();
			toast.success(texts.toastNotif);
		}
	}

	if (mode === "add") {
		texts = {
			toastNotif: <Text tid={"add_astronaut_toast"} />,
			title: <Text tid={"add_astronaut_title"} />,
			// contentText: "Here you can ADD a new astronaut.",
			action: <span style={{color: theme.palette.background.contrast}}><Text tid={"add_astronaut_action"} /></span>,
			cancelAction: <span style={{color: theme.palette.background.contrast}}><Text tid={"add_astronaut_close"} /></span>
		}
	}

	if (mode === "edit") {
		texts = {
			toastNotif: <Text tid={"edit_astronaut_toast"} />,
			title: <Text tid={"edit_astronaut_title"} />,
			// contentText: "Here you can UPDATE selected astronaut.",
			action: <span style={{color: theme.palette.background.contrast}}><Text tid={"edit_astronaut_action"} /></span>,
			cancelAction: <span style={{color: theme.palette.background.contrast}}><Text tid={"edit_astronaut_close"} /></span>
		}
	}

	if (mode === "remove") {
		texts = {
			toastNotif: <Text tid={"remove_astronaut_toast"} />,
			title: <Text tid={"remove_astronaut_title"} />,
			contentText: <Text tid={"remove_astronaut_contentText"} />,
			action: <span style={{color: theme.palette.secondary.main}}><Text tid={"remove_astronaut_action"} /></span>,
			cancelAction: <span style={{color: theme.palette.background.contrast}}><Text tid={"remove_astronaut_close"} /></span>
		}
	}

	const dialogSx = {
		'& .MuiDialog-paper' : {
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

	const textFieldSx = {
		'& .MuiInputLabel-root': {
			color: 'text.primary',
			'&.Mui-focused': {
				color: 'red'
			}
		},
		'& .MuiInput-root': {
			backgroundColor: "red",
			'&.Mui-focusVisible, &.Mui-selected': {
				color: 'primary.light'
			},
			'&::after': {
				borderBottom: 'red'
			},
		},
	}

	return (
		<div>
			<Dialog open={props.open} onClose={props.close} sx={dialogSx}>
				
				<DialogTitle sx={{mb: 2}}>{texts.title}</DialogTitle>				
				<DialogContent>
					{ mode === "remove" && <DialogContentText>{texts.contentText}</DialogContentText>}
										
					<form id="newAstroForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
						{ mode !== "remove" && 
							<div>
							<TextField
								value={firstName}
								onChange={handleInputChange}
								autoFocus
								margin="dense"
								id="firstName"
								name="firstName"
								label={<Text tid={"table_headers_col1"} />}
								type="text"
								InputLabelProps={{ shrink: true }}
								inputProps={{ maxLength: 50 }}
								fullWidth
								variant="standard"
								required
							/>
							<TextField
								value={lastName}
								onChange={handleInputChange}
								margin="dense"
								id="lastName"
								name="lastName"
								label={<Text tid={"table_headers_col2"} />}
								type="text"
								InputLabelProps={{ shrink: true }}
								inputProps={{ maxLength: 50 }}
								fullWidth
								variant="standard"
								required
							/>
							<TextField
								value={birthDate}
								onChange={handleInputChange}
								margin="dense"
								id="birthDate"
								name="birthDate"
								label={<Text tid={"table_headers_col3"} />}
								type="date"
								InputLabelProps={{ shrink: true }}
								inputProps={{ min: "1903-01-02", max: (new Date).toISOString().substring(0, 10) }}
								fullWidth
								variant="standard"
								required
							/>
							<TextField
								value={superPower}
								onChange={handleInputChange}
								margin="dense"
								id="superPower"
								name="superPower"
								label={<Text tid={"table_headers_col4"} />}
								type="text"
								InputLabelProps={{ shrink: true }}
								inputProps={{ maxLength: 50 }}
								fullWidth
								variant="standard"
								required
							/>							
							<TextField
								value={rent}
								onChange={handleInputChange}
								margin="dense"
								id="rent"
								name="rent"
								label={<Text tid={"table_headers_col5"} />}
								type="date"
								InputLabelProps={{ shrink: true }}
								inputProps={{ min: "1903-01-02", max: (new Date).toISOString().substring(0, 10) }}
								fullWidth
								variant="standard"
								required
							/>
							<TextField
								value={returned}
								onChange={handleInputChange}
								margin="dense"
								id="returned"
								name="returned"
								label={<Text tid={"table_headers_col6"} />}
								type="date"
								InputLabelProps={{ shrink: true }}
								inputProps={{ min: "1903-01-02", max: (new Date).toISOString().substring(0, 10) }}
								fullWidth
								variant="standard"
							/>
							<TextField
								value={note}
								onChange={handleInputChange}
								margin="dense"
								id="note"
								name="note"
								label={<Text tid={"table_headers_col7"} />}
								type="text"
								InputLabelProps={{ shrink: true }}
								inputProps={{ maxLength: 140 }}
								fullWidth
								variant="standard"
								required
							/>
							</div>
						}
						</form>
				</DialogContent>

				<DialogActions>
					<Button onClick={props.close}>{texts.cancelAction}</Button>
					<Button type="submit" form="newAstroForm" label="Submit">{texts.action}</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}