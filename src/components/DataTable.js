import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function DataTable(props) {
    
    const { dataset, setSelectionModel, setSelectedRow, selectionModel } = props;

    // Legend: colFN - columnFirstName etc.
    const columns = [
        { field: 'colN', headerName: '#', width: 10 },
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
                onSelectionModelChange={({ selectionModel }) => setSelectionModel(selectionModel)}
                onRowClick={((data) => setSelectedRow(data.row))}
            />
        </div>
    );
}

export default DataTable;