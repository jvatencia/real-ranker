import React, {useState} from "react";
import styled from "styled-components";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

let schools: Array<any> = [];
const Table = ({data}: any) => {
  let [parsedData, setParsedData] = useState({});
  console.log(data);
  console.log('yo');
  let pData: any = {};
  let ss: Array<any> = []

  if (data && data.length > 0) {
    data.forEach((e: any, i: any) => {
      e['id'] = i;
      ss.push(e['INSTNM'])
      pData[e['INSTNM']] = e
    })
    // schools = ss;
    parsedData = pData;
    console.log(parsedData);

    // data = data.array.forEach((element: Object, i: number) => {
    //   console.log(element);
    //   return {...element, id: i};
    // });
  }
  // below stolen from: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  const columns: GridColDef[] = [
    { field: 'INSTNM', width: 200, type: 'string', headerName: 'School'},
    { field: 'ADM_RATE', width: 200, type: 'string', headerName: 'Acceptance Rate',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'COMP_ORIG_YR4_RT', width: 200, type: 'string', headerName: 'Orientation -> Graduate (4)',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'ENRL_ORIG_YR2_RT', width: 200, type: 'string', headerName: '% Left in 2',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'WDRAW_ORIG_YR3_RT', width: 200, type: 'string', headerName: 'Withdrawals',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'C100_4', width: 200, type: 'string', headerName: '4 Year Grad Rate',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'C150_4', width: 200, type: 'string', headerName: '6 Year Grad Rate',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
  },
    { field: 'sixYearGradRate', width: 200, type: 'string', headerName: '% Graduates > 4 years',
      valueFormatter: (row) => {
        return Math.round(row.value*100) + '%';
      },
      valueGetter: (params: GridValueGetterParams) =>
      (params.row.C150_4 - params.row.C100_4) / params.row.C150_4,
  },
    { field: 'studentDebt', width: 200, type: 'string', headerName: 'Student Debt',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
      valueGetter: (params: GridValueGetterParams) =>
      (.25*params.row.CUML_DEBT_P10 + .5*params.row.CUML_DEBT_P25 + .15*params.row.CUML_DEBT_P75 + .1*params.row.CUML_DEBT_P90)
  },
    { field: 'PLUS_DEBT_INST_COMP_MD', width: 200, type: 'string', headerName: 'Parent Debt',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
  },
    { field: 'PCT90_EARN_WNE_P10', width: 200, type: 'string', headerName: 'Income 90% 10 yr',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
  },
    { field: 'PCT75_EARN_WNE_P10', width: 200, type: 'string', headerName: 'Income 75% 10 yr',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
  },
    { field: 'PCT25_EARN_WNE_P10', width: 200, type: 'string', headerName: 'Income 25% 10 yr',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
  },
    { field: 'PCT10_EARN_WNE_P10', width: 200, type: 'string', headerName: 'Income 10% 10 yr',
      valueFormatter: (row) => {
        return formatter.format(row.value);
      },
  },
  //   { field: '', width: 130, type: 'number', headerName: 'In state tuition', 
  //     valueFormatter: (row) => {
  //       return formatter.format(row.value);
  //     },
  //   },
  //   { field: 'Out-of-state tuition', width: 130, type: 'number', headerName: 'Out of state tuition',
  //     valueFormatter: (row) => {
  //       return formatter.format(row.value);
  //     },
  //   },
  //   { field: 'Acceptance Rate', width: 130, type: 'number', headerName: 'Acceptance Rate'},
  //   { field: 'ACT Comp 50', width: 230, type: 'number', headerName: 'ACT Composite 50th Percentile'},
  //   { field: 'Average SAT', width: 130, type: 'number', headerName: 'Average SAT'},
  //   { field: 'Hispanic%', width: 130, type: 'number', headerName: 'Percent Hispanic',
  //     valueFormatter: (row) => {
  //       return row.value * 100 + '%';
  //     },
  //   },
  //   { field: 'FemaleUndergrad %', width: 130, type: 'number', headerName: 'Percent Female',
  //     valueFormatter: (row) => {
  //       return row.value * 100 + '%';
  //     },
  //   },
  //   // { field: '2orMoreRaces%', type: 'number', headerName: 'Two or More Races %'},
  //   { field: '% from US', type: 'number', headerName: '% students domestic',
  //     valueFormatter: (row) => {
  //       return row.value * 100 + '%';
  //     },
  // },
  //   { field: '% in poverty', type: 'number', headerName: '% students below Poverty Line',
  //     valueFormatter: (row) => {
  //       return row.value + '%';
  //     },
  // },
  //   { field: '% on loan', type: 'number', headerName: '% students on loan',
  //     valueFormatter: (row) => {
  //       return row.value * 100 + '%';
  //     },
  //   },
    // { field: 'ACT Comp 25', type: 'number', headerName: 'ACT Composite 25th Percentile'},
    // { field: 'ACT Comp 75', type: 'number', headerName: 'ACT Composite 75th Percentile'},
    // { field: 'ACT Writing 25', type: 'number', headerName: 'ACT Writing 25th Percentile'},
    // { field: 'ACT Writing 50', type: 'number', headerName: 'ACT Writing 50th Percentile'},
    // { field: 'ACT Writing 75', type: 'number', headerName: 'ACT Writing 75th Percentile'},
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  return (
    <Container>
      {/* TRANSPOSE TABLE */}
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {/* { schools.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            {schools.map((school) => (
              <TableCell align="center">
                {school}
              </TableCell>
            ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {columns.map((col) => (
            <TableRow key={col.headerName}>
              <TableCell>{col.headerName}</TableCell>
              {schools.map((school) => (
//@ts-ignore
                <TableCell align="right">{col.valueFormatter ? col.valueFormatter(parsedData[school][col.field]) : parsedData[school][col.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      ) : null} */}
    </Container>
  );
};

export default Table;

const Container = styled.section`
  .case1 table {
    border-collapse: separate;
    border-spacing: 0;
    border-top: 1px solid grey;
  }

  td,
  th {
    margin: 0;
    border: 1px solid grey;
    white-space: nowrap;
    border-top-width: 0px;
  }

  .headcol {
    position: absolute;
    width: 5em;
    left: 0;
    top: auto;
    border-top-width: 1px;
    /*only relevant for first row*/
    margin-top: -1px;
    /*compensate for top border*/
  }

  .headcol:before {
    content: "Row ";
  }

  .long {
    background: yellow;
    letter-spacing: 1em;
  }

  .case2,
  .case3 {
    table {
      border-collapse: collapse;
      margin-bottom: 24px;
    }

    th,
    td {
      border: 1px solid black;
      padding: 8px;
    }

    .case3 table {
      thead,
      tbody,
      tr {
        display: inline-block;
      }

      tbody tr {
        margin-right: -0.27em;
      }

      th,
      td {
        display: block;
      }
    }
  }
`;
