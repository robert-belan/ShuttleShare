import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function DataTable(props) {
    
    const { dataset, setSelectionModel, setSelectedRow, selectionModel } = props;

    // Legend: colFN - columnFirstName etc.
    const columns = [
        { field: 'colN', headerName: '#', width: 5 },
        { field: 'colFN', headerName: 'First Name', flex: 1 },
        { field: 'colLN', headerName: 'Last Name', flex: 1 },
        { field: 'colB', headerName: 'Birthday', flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value) },
        { field: 'colS', headerName: 'Superpower', flex: 1 },
    ];
    
    const rows = Object.entries(dataset).map( ([id, values], index) => {
        return {
            id,
            colN: index,
            colFN: values.firstName,
            colLN: values.lastName,
            colB: values.birthDate,
            colS: values.superPower
        };
    });
    
    const sx = {
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
        <div style={{ flexGrow: 1 }}>
            <DataGrid 
                rows={rows} 
                columns={columns}
                rowHeight={40} 
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
        </div>
    );
}

export default DataTable;