import  {useState} from 'react';
import { darken, lighten, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridTreeNode } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { GridRowHeightParams } from '@mui/x-data-grid';

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

const og_columns = [
  {field: 'title', className: 'super-app-theme--header' ,width: 150, sortable: false, headerName: ''},
  {field: 'college1', width: 160, sortable: false, headerName: 'Michigan State University'},
  {field: 'filler', maxWidth: 15, sortable: false, headerName: ''},
  {field: 'college2', width: 160, sortable: false, headerName: 'Carnegie Mellon University'}
];

const og_rows = [
  createData(0,'Your Score', '92', '86','', 'main'),
  createData(2,'Acceptance Rate', '20%', '71%','', 'bland'),
  createData(3,'Success Score', 'A-', 'B+','', 'secondary'),
  createData(1011,'', '', '','', 'bland'),
  createData(5,'Value Grade', 'A', 'A', '','secondary'),
  createData(1012,'', '', '','', 'bland'),
  createData(1,'Outcomes', 'HI/HD', 'HI/HD','', 'secondary'),
  createData(1013,'', '', '','', 'bland'),
  createData(4,'Cost Score', '80k', '156k', '','secondary'),
  createData(1014,'', '', '','', 'bland'),
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
    display:'flex',
    justifyContent: 'center',
    borderBottom: 'none',
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
  '& .super-app-theme--bland': {
    '&:MuiDataGrid-row': {
      height: '20px',
    }
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
  '& .super-app-theme--tertiary': {
    color: '#222224',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
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
  const [columns, setColumns] = useState(og_columns)
  const [rows, setRows] = useState(og_rows);
  const [notif, setNotif] = useState(false);
  const [priorColClicked, setPrior] = useState('');
  function handleOpen(tableToOpen: string, p:any) : void {
    let rowsNew = og_rows;
    if (p.row.title === priorColClicked) {
      setRows(rowsNew);
      setPrior('');
      return;
    }
    if (p.row.title === 'Success Score') {
      rowsNew = [
        createData(0,'Your Score', '92', '86','', 'main'),
        createData(2,'Acceptance Rate', '20%', '71%','', 'bland'),
        createData(3,'Success Score', 'A-', 'B+','', 'secondary'),
        createData(7,'Orientation to grad', '75%', '69%','', 'tertiary'),
        createData(8,'Student Support', 'Med', 'Low','', 'tertiary'),
        createData(9,'Left in 2 years', '8 in 10', '5 in 10','', 'tertiary'),
        createData(10,'Avg time to grad', '4 yrs', '4.5 yrs','', 'tertiary'),
        createData(1011,'', '', '','', 'bland'),
        createData(5,'Value Grade', 'A', 'A', '','secondary'),
        createData(1012,'', '', '','', 'bland'),
        createData(1,'Outcomes', 'HI/HD', 'HI/HD','', 'secondary'),
        createData(1013,'', '', '','', 'bland'),
        createData(4,'Cost Score', '80k', '156k', '','secondary'),
        createData(1014,'', '', '','', 'bland'),
        createData(6,'Diversity Score', 'High', 'High','', 'secondary'),
      ];
      setNotif(true);
    }
    setRows(rowsNew);
    setPrior(p.row.title);
  }
  const data = {columns, rows};
  const handleClose = (e: any) => {
    setNotif(false);
  };
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
        getRowHeight={({ id }: GridRowHeightParams) => {
          if (1000 < id && id < 1069) {
            return 20;
          }
      
          return 52;
        }}
        disableColumnMenu
        disableColumnFilter
        onRowClick={(p, e) => {handleOpen('success_score', p);}}
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
      <Snackbar open={notif} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {/* @ts-ignore */}
          Now showing {priorColClicked.toLowerCase()} details.
        </Alert>
      </Snackbar>
    </Box>
  );};
