import  {useState} from 'react';
import Dropdown from "./Dropdown";
import SelectedCollege from './SelectedCollege';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function SearchSchools() {
    const [selectedSchools, setSelectedSchools] = useState<Array<string>>([]);
    function addSchool(school: string) {
        setSelectedSchools(selectedSchools.concat([school]));
    }
    function removeThisSchool(school: string) {
        console.log(school);
        for (let i = 0; i < selectedSchools.length; i++) {
        if (selectedSchools[i] == school) {
            setSelectedSchools(selectedSchools.slice(0,i).concat(selectedSchools.slice(i+1, -1)))
        }
        }
    }
    let selectedSchoolDivs: any = [];
    selectedSchools.map((school) => {
      selectedSchoolDivs.push(<SelectedCollege removeSchool={removeThisSchool} school={school} />);
    })
	return(
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Dropdown options={['Michigan State University', 'Carnegie Mellon University']} addSchool={addSchool} />
          {selectedSchoolDivs} 
        </Grid>
      </Grid>
    )
};