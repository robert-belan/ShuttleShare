import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import toast from 'react-hot-toast';
import { db } from '../firebaseConfig';
import { child, push, set, remove } from 'firebase/database';



const initialState = {
	firstName: "",
	lastName: "",
	birthDate: "",
	superPower: ""
}

export default function AddAstronaut(props) {

	const [state, setState] = useState(initialState);

	useEffect(() => {
		if ( mode === "edit") {
			setState({
				firstName: props.rowData.colFN,
				lastName: props.rowData.colLN,
				birthDate: props.rowData.colB,
				superPower: props.rowData.colS
			});
		}
	}, []);

	const { firstName, lastName, birthDate, superPower } = state;

	const mode = props.mode;
	const id = props.rowData.id;

	let texts = {}

	function handleInputChange(event) {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();

		if ( mode !== "remove" && (!firstName || !lastName || !birthDate || !superPower)) {
			toast.error("I need to know everything. \nNames, birth and particularly superpower!");
		
		} else if (mode === "add") {
			push(db, state)
				.then(() => {
					toast.success("New astronaut on the board.");
					props.close(); // closes dialog window
				})
				.catch(() => { toast.error("Adding failed. Try it later, please.") });
		
		} else if (mode === "edit") {
			set(child(db, id), state)
				.then(() => {
					toast.success("Astrounat edited.");
					props.close(); // closes dialog window
				})
				.catch(() => { toast.error("Editing failed. Try it later, please.") })
		
		} 
	
		if (mode === "remove") {
			remove(child(db, id));
			props.close();
			toast.success("It was an honor to serve with you.");
		}
	}

	if (mode === "add") {
		texts = {
			title: "Add astronaut",
			contentText: "Here you can ADD a new astronaut.",
			action: <span style={{color: "green"}}>Add</span>,
			cancelAction: "Cancel"
		}
	}

	if (mode === "edit") {
		texts = {
			title: "Edit astronaut",
			contentText: "Here you can UPDATE selected astronaut.",
			action: <span style={{color: "green"}}>Update</span>,
			cancelAction: "Cancel"
		}
	}

	if (mode === "remove") {
		texts = {
			title: "Remove astronaut",
			contentText: "Do you really want to REMOVE this astronaut?",
			action: <span style={{color: "red"}}>Yes, remove!</span>,
			cancelAction: "God, no!"
		}
	}


	return (
		<div>
			<Dialog open={props.open} onClose={props.close}>
				
				<DialogTitle>{texts.title}</DialogTitle>
				
				<DialogContent>
					<DialogContentText>{texts.contentText}</DialogContentText>
					
					
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
								label="First Name"
								type="text"
								fullWidth
								variant="outlined"
								required
							/>
							<TextField
								value={lastName}
								onChange={handleInputChange}
								margin="dense"
								id="lastName"
								name="lastName"
								label="Last Name"
								type="text"
								fullWidth
								variant="outlined"
							/>
							<TextField
								value={birthDate}
								onChange={handleInputChange}
								margin="dense"
								id="birthDate"
								name="birthDate"
								label="Birth Date"
								type="date"
								fullWidth
								variant="outlined"
							/>
							<TextField
								value={superPower}
								onChange={handleInputChange}
								margin="dense"
								id="superPower"
								name="superPower"
								label="Superpower"
								type="text"
								fullWidth
								variant="outlined"
							/></div>
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