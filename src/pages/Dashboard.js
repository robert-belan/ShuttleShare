import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { onValue } from "firebase/database";
import Button from '@mui/material/Button';
import AddAstronaut from '../components/AddAstronaut';
import toast from 'react-hot-toast';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import DataTable from '../components/DataTable';
import { ButtonGroup, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Dashboard() {

    // Fetched Data
    const [dataset, setDataset] = useState({});

    // Controls dialog window
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(null);
    const [selectionModel, setSelectionModel] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});

    // Style
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));


    //* Get data. 
    useEffect(() => {
        onValue(db, (snapshot) => {
            if (snapshot.exists()) {
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
            <Typography sx={{ my: 4 }} variant="h3" align="center">Dashboard</Typography>

            <ClickAwayListener onClickAway={() => {
                setSelectionModel([]);
                setSelectedRow({});
            }} >

                <Box sx={{ align: "center" }}>
                    {/* first "open" leads to conditional rendering  */}
                    {/* props "open" controls dialog opening */}
                    {open && <AddAstronaut
                        open={open}
                        close={handleDialogClose}
                        rowData={selectedRow}
                        mode={mode}
                    />}

                    <DataTable
                        dataset={dataset}
                        setSelectionModel={setSelectionModel}
                        setSelectedRow={setSelectedRow}
                        selectionModel={selectionModel}
                    />

                    <Stack
                        direction="row"
                        justifyContent="center"
                        sx={{
                            my: 4,
                        }}
                    >
                        <Button
                            onClick={() => handleDialogOpen("remove")}
                            disabled={!selectedRow.id}
                            color='secondary'
                            sx={{ 
                                mr: 2,
                                '&.Mui-disabled': {
                                    color: 'text.disabled'
                                }
                            }}
                        >
                            Remove
                        </Button>
                        <ButtonGroup
                            size="small"
                            variant="contained"
                        >
                            <Button
                                onClick={() => handleDialogOpen("edit")}
                                disabled={!selectedRow.id}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => { handleDialogOpen("add") }}
                            >
                                Add astronaut
                            </Button>

                        </ButtonGroup>

                    </Stack>


                </Box>
            </ClickAwayListener>

        </>)
}

export default Dashboard;