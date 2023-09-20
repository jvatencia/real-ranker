import  {useState, useEffect} from 'react';
import Dropdown from "./Dropdown";
import SelectedCollege from './SelectedCollege';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { UserContext } from '../../app-context/userContext';
import { BASE_URL } from '../../utils/Constants';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SearchSchools() {
    const {user, colleges, updateState } = useContext(UserContext);
    console.log(colleges);
    const [schoolOptions, setSchoolOptions] = useState(null);
    let [schools, setSchools] = useState(colleges!);
    const [justAddedSchool, setJustAddedSchool] = useState('');
    const [open, setOpen] = useState(false);
    const [failOpen, setFailOpen] = useState(false);
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
            },
          })
            .then((response) => {
              if (response?.ok) {
                return response.json();
              }
              console.log('Error on fetching schools')
            })
            .then((data) => {
              setSchoolOptions(data);
            });
        } catch (err) {
          console.log(err);
        }
      };

      getAllSchools();
    }, []);

    const addSchool = (college: any) => {
      const isDuplicate = schools.some(
        (el: any) => parseInt(el?.id) === parseInt(college?.id)
      );

      if (isDuplicate) {
        setJustAddedSchool(college['instnm'])
        setFailOpen(true);
      } else {
        updateState({colleges: colleges?.concat([college])});
        setSchools(schools.concat(college));
        setJustAddedSchool(college['instnm'])
        setOpen(true);
      }
    };

    useEffect(() => {
      //
    });
    const handleClose = (e: any) => {
      setOpen(false);
      setFailOpen(false);
    };
    function removeThisSchool(school: any) {
        for (let i = 0; i < schools.length; i++) {
          //@ts-ignore
        if (schools[i].id == school.id) {
          setSchools(schools.slice(0,i).concat(schools.slice(i+1, -1)))
        }
        }
    }
    let selectedSchoolDivs: any = [];
    schools.map((school) => {
      selectedSchoolDivs.push(<SelectedCollege removeSchool={removeThisSchool} school={school} />);
    })
	return(
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Dropdown options={schoolOptions} addSchool={addSchool} />
          {selectedSchoolDivs} 
        </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {/* @ts-ignore */}
          Successfully added {justAddedSchool}.
        </Alert>
      </Snackbar>
      <Snackbar open={failOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {/* @ts-ignore */}
          {justAddedSchool} already added.
        </Alert>
      </Snackbar>
      </Grid>
    )
};