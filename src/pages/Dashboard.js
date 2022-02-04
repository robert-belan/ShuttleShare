import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { db } from "../firebaseConfig";
import { onValue } from "firebase/database";

import { 
    Button,
    Box,
    ClickAwayListener,
    useMediaQuery,
    useTheme,
    ButtonGroup,
    Stack,
    Typography
} from '@mui/material';

import AddAstronaut from '../components/AddAstronaut';
import DataTable from '../components/DataTable';
import Text from '../components/Text';



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

    // Get data from the database.
    useEffect(() => {
        onValue(db, (snapshot) => {
            if (snapshot.exists()) {
                setDataset(snapshot.val());
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
            <Typography sx={{ my: 4 }} variant="h3" align="center">
                <Text tid={"dashboard_mainHeader"} />
            </Typography>

            <ClickAwayListener onClickAway={() => {
                setSelectionModel([]);
                setSelectedRow({});
            }} >

                <Box sx={{ align: "center", mb: 5 }}>
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
                                mr: 4,
                                '&.Mui-disabled': {
                                    color: 'text.disabled'
                                }
                            }}
                        >
                            <Text tid={"table_controls_remove"} />
                        </Button>

                        <ButtonGroup
                            size="small"
                            variant="contained"
                        >
                            <Button
                                onClick={() => handleDialogOpen("edit")}
                                disabled={!selectedRow.id}
                            >
                                <Text tid={"table_controls_edit"} />
                            </Button>

                            <Button
                                onClick={() => { handleDialogOpen("add") }}
                            >
                                <Text tid={"table_controls_add"} />
                            </Button>

                        </ButtonGroup>

                    </Stack>

                </Box>
            </ClickAwayListener>
        </>)
}

export default Dashboard;