import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Dropdown from "../../components/commons/Dropdown";
import Table from "../../components/commons/Table";
import CoolTable from "../../components/commons/CoolTable";
import { devices } from "../../utils/Breakpoints";
import { BASE_URL } from "../../utils/Constants";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Homepage = () => {
  const [schoolOptions, setSchoolOptions] = useState(null);
  const [mySchoolList, setMySchoolList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [justAddedSchool, setJustAddedSchool] = useState('');
  console.log(schoolOptions);
  const handleClose = (e: any) => {
    setOpen(false);
    setFailOpen(false);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const getAllSchools = () => {
      // const endpoint = `/wp-json/ttg/v2/schools`;
      const endpoint = `/data`;

      try {
        fetch(`${BASE_URL}${endpoint}`, {
          signal: abortController.signal,
          headers: {
            Accept: "application/json",
            //   Authorization: authHeader(),
          },
        })
          .then((response) => {
            if (response?.ok) {
              return response.json();
            }
            // throw new Error("Error on fetching schools !");
            console.log('Error on fetching schools')
          })
          .then((data) => {
            console.log(data);
            // setSchoolOptions(data);
          });
      } catch (err) {
        console.log(err);
      }
    };

    getAllSchools();

    // return () => {
    //   abortController.abort();
    // };
  }, []);

  const addSchool = (school: any) => {
    const isDuplicate = mySchoolList.some(
      (el: any) => parseInt(el?.id) === parseInt(school?.id)
    );

    if (isDuplicate) {
      setJustAddedSchool(school['INSTNM'])
      setFailOpen(true);
    } else {
      const newSchoolSet = [...mySchoolList, school];
      setMySchoolList(newSchoolSet);
      setJustAddedSchool(school['INSTNM'])
      setOpen(true);
    }
  };

  useEffect(() => {
    //
  }, [mySchoolList]);

  let tableContents;
  if (true)//mySchoolList && mySchoolList.length > 0)
  {
    tableContents = <CoolTable />; //<Table data={mySchoolList} />;
  }
  else 
  {
    tableContents = <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Add schools to populate the table.
        </Typography>
      </CardContent>
    </Card>;
  }

  return (
    <Container>
      <QuotesTitle>
        “An investment in knowledge pays the best interest.”
        <br />
        <AuthorTitle>– Benjamin Franklin.</AuthorTitle>
      </QuotesTitle>
      {/* <Dropdown options={schoolOptions} addSchool={addSchool} /> */}
      {tableContents}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully added {justAddedSchool}.
        </Alert>
      </Snackbar>
      <Snackbar open={failOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {justAddedSchool} already added.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Homepage;

const Container = styled.section`
  min-width: 375px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 24px 38px rgba(3, 16, 40, 0.14);
  border-radius: 4px 4px 0px 0px;
  padding: 48px 48px 0px;
  height: calc(100vh - 100px);
  overflow-y: auto;

  @media ${devices.mobileL} {
    padding: 18px 18px 0;
  }
`;

const QuotesTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  color: #141312;
  line-height: 44px;
  letter-spacing: 0.15px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
`;

const AuthorTitle = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 20px;
  color: #676565;
  display: block;
  width: 100%;
`;
