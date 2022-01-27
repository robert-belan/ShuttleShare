import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { onValue } from "firebase/database";
import Button from '@mui/material/Button';
import AddAstronaut from '../components/AddAstronaut';
import toast from 'react-hot-toast';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import DataTable from '../components/DataTable';

function Dashboard() {

    // Fetched Data
    const [dataset, setDataset] = useState({});

    // Controls dialog window
    const [open, setOpen] = useState(false);
    const [mode, setMode ] = useState(null);
    const [selectionModel, setSelectionModel] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});


    //* Get data. 
    useEffect(() => {
        onValue( db, ( snapshot ) => {
            if ( snapshot.exists() ) {
                setDataset(snapshot.val()); //! implementovat moznost, ze tam nebude zadny zaznam - nahodit nejakou hlasku
            } else {
                toast.error("Empty database.")
                setDataset({});
            }
        });

        return () => { setDataset({}) };
    }, []);

    function handleDialogOpen(mode) {
        setOpen(true);
        setMode(mode);
    }

    function handleDialogClose() {
        setOpen(false);
        setMode(null);
    }

    return (
        <>
            <h1>Dashboard</h1>

            <ClickAwayListener onClickAway={() => {
                setSelectionModel([]);
                setSelectedRow({});
                }} >
                
                <Box>
                    {/* first "open" leads to conditional rendering  */}
                    {/* props "open" controls dialog opening */}
                    {open && <AddAstronaut 
                        open={open} 
                        close={handleDialogClose} 
                        rowData={selectedRow} 
                        mode={mode} 
                        /> }

                    <Button variant="outlined" onClick={() => {handleDialogOpen("add")}}>
                        Add
                    </Button>
                    <Button variant="outlined" onClick={() => handleDialogOpen("edit")} disabled={!selectedRow.id}>
                        Edit
                    </Button>
                    <Button variant="outlined" onClick={() => handleDialogOpen("remove")} disabled={!selectedRow.id}>
                        Remove Astronaut
                    </Button>

                    <DataTable dataset={dataset} setSelectionModel={setSelectionModel} setSelectedRow={setSelectedRow} selectionModel={selectionModel} />
                </Box>
            </ClickAwayListener>

        </>)
}

export default Dashboard;