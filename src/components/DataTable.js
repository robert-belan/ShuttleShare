import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function DataTable(props) {
    
    const { dataset, setSelectionModel, setSelectedRow, selectionModel } = props;

    // Legend: colFN - columnFirstName etc.
    const columns = [
        { field: 'colN', headerAlign: 'center', align:'center', headerName: '#', width: 5 },
        { field: 'colFN', headerAlign: 'left', align:'left', headerName: 'First Name', flex: 1 },
        { field: 'colLN', headerAlign: 'left', align:'left', headerName: 'Last Name', flex: 1 },
        { field: 'colB', headerAlign: 'left', align:'left', headerName: 'Birthday', flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value) },
        { field: 'colS', headerAlign: 'left', align:'left', headerName: 'Superpower', flex: 1 },
        { field: 'colRt', headerAlign: 'right', align:'right', headerName: 'Rent', flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value)  },
        { field: 'colRtnd', headerAlign: 'right', align:'right', headerName: 'Returned', flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value)  },
        { field: 'colNt', headerAlign: 'right', align:'right', headerName: 'Note', flex: 1 },
    ];
    
    const rows = Object.entries(dataset).map( ([id, values], index) => {
        return {
            id,
            colN: index,
            colFN: values.firstName,
            colLN: values.lastName,
            colB: values.birthDate,
            colS: values.superPower,
            colRt: values.rent,
            colRtnd: values.returned,
            colNt: values.note
        };
    });
    
    const sx = {
        width: 'auto',
        color: 'text.primary',
        border: 0,
        '& .MuiDataGrid-row': {
            '&:hover': {
                backgroundColor: 'primary.main'
            },
            '&.Mui-selected, &.Mui-checked': {
                backgroundColor: 'primary.light'
            }
        },
        '& .MuiDataGrid-columnSeparator': {
            display: "none"
        },
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'primary.main'
        },
        '& .MuiDataGrid-cell': {
            '&:focus': {
                outline: "none"
            }
        },
    }

    return (
            <DataGrid 
                rows={rows} 
                columns={columns}
                rowHeight={40}
                density='standard'
                autoHeight={true} 
                hideFooter={true} 
                disableColumnMenu={true}
                selectionModel={selectionModel}
                disableColumnSelector={true}
                onSelectionModelChange={({ selectionModel }) => setSelectionModel(selectionModel)}
                onRowClick={((data) => setSelectedRow(data.row))}
                align="center"
                headerAlign="center"
                sx={sx}
            />

    );
}

export default DataTable;