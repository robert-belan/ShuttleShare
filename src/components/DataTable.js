import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Tooltip } from '@mui/material';
import Text from '../components/Text';

function DataTable(props) {
    
    const { dataset, setSelectionModel, setSelectedRow, selectionModel } = props;

    const tooltipSx = {
        '& .MuiTooltip-tooltip': {
            '& .MuiTooltip-tooltipPlacementLeft': {
                backgroundColor: 'yellow',
                fontSize: "1rem"
            }
        }
    }
    // Legend: colFN - columnFirstName etc.
    const columns = [
        { field: 'colN', headerAlign: 'center', align:'center', headerName: '#', width: 5 },
        { field: 'colFN', headerAlign: 'left', align:'left', headerName: <Text tid={"table_headers_col1"} />, flex: 1 },
        { field: 'colLN', headerAlign: 'left', align:'left', headerName: <Text tid={"table_headers_col2"} />, flex: 1 },
        { field: 'colB', headerAlign: 'left', align:'left', headerName: <Text tid={"table_headers_col3"} />, flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value) },
        { field: 'colS', headerAlign: 'left', align:'left', headerName: <Text tid={"table_headers_col4"} />, flex: 1 },
        { field: 'colRt', headerAlign: 'right', align:'right', headerName: <Text tid={"table_headers_col5"} />, flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value)  },
        { field: 'colRtnd', headerAlign: 'right', align:'right', headerName: <Text tid={"table_headers_col6"} />, flex: 1, type: 'date', valueGetter: ({ value }) => value && new Date(value)  },
        { field: 'colNt', headerAlign: 'right', align:'right', headerName: <Text tid={"table_headers_col7"} />, flex: 1, renderCell: 
            (params) => ( 
                <Tooltip sx={tooltipSx} title={params.value} placement="left"><Button variant="text" color="secondary" size="small"><Text tid={"table_row_show"} /></Button></Tooltip>
            ),
        },
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
        minWidth: '900px',
        color: 'text.primary',
        border: 0,
        '& .MuiDataGrid-row': {
            '&:hover': {
                backgroundColor: 'primary.light',
                color: 'text.contrastText'
            },
            '&.Mui-selected': {
                backgroundColor: 'primary.light',
                color: 'text.contrastText'
            },
            '&.Mui-selected:hover': {
                backgroundColor: 'primary.light',
                color: 'text.contrastText'
            },
        },
        '& .MuiDataGrid-columnSeparator': {
            display: "none"
        },
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'primary.main'
        },
        '& .MuiDataGrid-cell': {
            borderBottomColor: 'primary.light',
            '&:focus': {
                outline: "none"
            }
        },
        '& .MuiDataGrid-columnHeader': {
            color: 'text.contrastText'
        },
        '& .MuiDataGrid-sortIcon': {
            color: 'text.contrastText'
        }
    }

    
    return (
        <Box sx={{overflow: 'auto'}}>
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
        </Box>
    );
}

export default DataTable;