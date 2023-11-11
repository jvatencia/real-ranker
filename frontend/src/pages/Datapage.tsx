import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import SSlider from "../components/commons/SSlider";
import CollegeCardExpanded from "../components/commons/CollegeCardExpanded";

import CoolTable from "../components/commons/CoolTable";
import { useContext } from 'react';
import { UserContext } from '../app-context/userContext';

const Datapage = () => {
  const [schoolOptions, setSchoolOptions] = useState(null);
  const [mySchoolList, setMySchoolList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [justAddedSchool, setJustAddedSchool] = useState('');
  const handleClose = (e: any) => {
    setOpen(false);
    setFailOpen(false);
  };
  const [value, setValue] = useState(0);
  const {user, colleges, form, userScores, updateState } = useContext(UserContext);
  console.log('Form: ' );
  console.log(form);
  console.log('User scores: ' );
  console.log(userScores);

  let content: any;
  if (value == 0) {
  if (colleges && colleges.length>0){
    content = colleges.map( (college)=> { return <CollegeCardExpanded college={college} form={form} userScores={userScores} />});
    }
    else {
    content=undefined;
    }
    console.log(content)
  } else if (value == 1) {
    content = <CoolTable />;
  } else if (value == 2) {
    content = <SSlider />;
  }

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Results"  />
        <BottomNavigationAction label="Graph"  />
        <BottomNavigationAction label="Detail"  />
      </BottomNavigation>
      {content}
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
    </Box>
  );
};

export default Datapage;