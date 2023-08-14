import React, {useState} from 'react';
import { darken, lighten, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridTreeNode } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function createData(
  id: number,
  title: string,
  college1: string,
  college2: string,
  filler: string,
  status: string,
//   score: number,
//   acceptance_rate: string,
//   success_score: string,
//   orientation_grad: string,
//   student_support: string,
) {
  return { id, title, college1, college2, filler, status };
}

let columns = [
  {field: 'title', className: 'super-app-theme--header' ,width: 150, sortable: false, headerName: ''},
  {field: 'college1', width: 160, sortable: false, headerName: 'Michigan State University'},
  {field: 'filler', maxWidth: 15, sortable: false, headerName: ''},
  {field: 'college2', width: 160, sortable: false, headerName: 'Carnegie Mellon University'}
];

const rows = [
  createData(0,'Your Score', '92', '86','', 'main'),
  createData(2,'Acceptance Rate', '20%', '71%','', 'bland'),
  createData(3,'Success Score', 'A-', 'B+','', 'secondary'),
  createData(5,'Value Grade', 'A', 'A', '','secondary'),
  createData(1,'Outcomes', 'HI/HD', 'HI/HD','', 'secondary'),
  createData(4,'Cost Score', '80k', '156k', '','secondary'),
  createData(6,'Diversity Score', 'High', 'High','', 'secondary'),
];
const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getSelectedBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

const getSelectedHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);

const mainBackgroundColor = '#707AE6';
const secondaryBackgroundColor = '#A4B3FF';
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '.MuiDataGrid-cell': {
    color: '#222224',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    display:'flex',
    justifyContent: 'center',
    '&:nth-col(0n)': {
      justifyContent: 'start'
    },
  },
  '.MuiDataGrid-columnHeaderTitle': {
    color: '#222224',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  '& .super-app-theme--main': {
    backgroundColor: mainBackgroundColor,
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        mainBackgroundColor,
        'dark'
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        mainBackgroundColor,
        'dark',
      ),
      '&:hover': {
      backgroundColor: getSelectedBackgroundColor(
        mainBackgroundColor,
        'light',
        ),
      },
    },
  },
  '& .super-app-theme--secondary': {
    backgroundColor: secondaryBackgroundColor,
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        secondaryBackgroundColor,
        'dark'
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        secondaryBackgroundColor,
        'dark',
      ),
      '&:hover': {
      backgroundColor: getSelectedBackgroundColor(
        secondaryBackgroundColor,
        'dark',
        )
      },
    },
  },
}));

export default function CoolTable() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 25,
  // });
  // console.log(data);
  const data = {columns, rows};
  return (
    <Box sx={{
      '& .cold': {
        backgroundColor: '#b9d5ff91',
        color: '#1a3e72',
      },
      '& .orange': {
        backgroundColor: '#F8CF40',
        // color: '#1a3e72',
      },
      }}>
      <StyledDataGrid
        disableColumnMenu
        disableColumnFilter
        {...data}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        // @ts-ignore
        getCellClassName={(params: GridCellParams<any, any, number>) => {
          if (params.field === 'college1' || params.field == 'college2') {
            return 'orange';
          }
          // return params.value >= 15 ? 'hot' : 'cold';
        }}
      />
    {/* <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">U Mich.</StyledTableCell>
            <StyledTableCell align="right">Auburn</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value1}</StyledTableCell>
              <StyledTableCell align="right">{row.value2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    </Box>
  );};
