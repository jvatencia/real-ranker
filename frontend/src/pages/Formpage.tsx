import { useEffect, useState, forwardRef } from "react";
import InputLabel from '@mui/material/InputLabel';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/material/FormControl';
import { BootstrapInput } from "../components/utilities/BootstrapInput";
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchSchools from "../components/commons/SearchSchools";
import yeoldeimage from "../assets/yeoldeimage.png";
import { Typography } from "@mui/material";
interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

// custom style elements: phone number masking, input text component
const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask="(#00) 000-0000"
          definitions={{
            '#': /[1-9]/,
          }}
          inputRef={ref}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );


const Formpage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grad, setGrad] = useState('');
  const [actSatScore, setActSat] = useState('');
  const [gpa, setGpa] = useState('');
  const [firstGen, setFirstGen] = useState('');
  const [academicDisruption, setAcaDis] = useState('');
  const [upwardTrajectory, setUpwardTrajectory] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [page, setPage] = useState(0);
  const [continuable, setContinue] = useState(true);
  const [backable, setBackable] = useState(false);
  const pages = 4;
  function pageUpdate(pageDiff: number) {
    let newPage = page + pageDiff;
    console.log(page, newPage);
    if (!(newPage < 0 || newPage === pages)) {
        // update page
        setPage(newPage);
    }
    if (newPage === 0) {
        setBackable(false);
    } else {
        setBackable(true);
    }
    if (newPage === pages-1) {
        setContinue(false);
    } else {
        setContinue(true);
    }
  }
  function validateName() {
    if (name.length == 0) {
        setNameError(true);
    } else {
        setNameError(false);
    }
  }
  function validateEmail() {
    //https://mailtrap.io/blog/validate-emails-in-react/ from this
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        setEmailError(true);
    } else {
        setEmailError(false);
    }
  }
  function validatePhone() {
    if (!/^\(\d{3}\)\s\d{3}-\d{4}$/i.test(phone)) {
        setPhoneError(true);
    } else {
        setPhoneError(false);
    }
  }
  let pageContent: any = null;
  if (page === 0) {
    pageContent = (
      <Grid 
        container
        spacing={2}
        direction='row'
        alignItems="center"
        justifyContent='center'>
        <Grid item xs={9}>
          <Typography
            sx={{
              color: '#222224',
              fontFamily: 'Open Sans',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Real Ranker works for you, but it needs to know you.
            </Typography>

        </Grid>
        <Grid item xs={9}>

        <FormControl variant="standard"
            error={nameError} 
            sx={{width: '100%'}}
            >
            <InputLabel shrink htmlFor="name">
                Name
            </InputLabel>
            <BootstrapInput value={name} id="name"
            // @ts-ignore
                onChange={e => setName(e.target.value)}
                onBlur={validateName}
                />
        </FormControl>

        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            error={emailError} 
            sx={{width: '100%'}}
            >
            <InputLabel shrink htmlFor="email">
                Email
            </InputLabel>
            <BootstrapInput value={email} id="email"
            // @ts-ignore
                onChange={e => setEmail(e.target.value)}
                onBlur={validateEmail}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            error={phoneError} 
            >
            <InputLabel shrink htmlFor="phone">
                Phone Number
            </InputLabel>
            <BootstrapInput value={phone} id="phone"
            // @ts-ignore
                onChange={e => setPhone(e.target.value)}
                onBlur={validatePhone}
                inputComponent={TextMaskCustom as any}
                />
        </FormControl>
        </Grid>
        </Grid>
    );
  } else if (page === 1) {
    pageContent = (
      <Grid 
        container
        spacing={2}
        direction='row'
        alignItems='center'
        justifyContent='center'>
        <Grid item xs={9}>
          <Box 
            component="img"
            src={yeoldeimage}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            sx={{
              color: '#222224',
              fontFamily: 'Open Sans',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
            To get results from our admissions calculator, get actionable college advice, create a curated admissions experience, and get a wholly custom, curated college ranking made just for you... you have to fill out the long form. <br/><br/> Skip parts that you don’t feel comfortable/don’t know. <br/><br/> We don’t sell your data. We don’t double sell your data. We don’t double dog sell your data. (All questions are mandatory but there are options for prefer not to say).
            </Typography>

        </Grid>
      </Grid>
    )
  } else if (page === 2) {
    pageContent = (
      <Grid 
        container
        spacing={2}
        direction='row'
        alignItems="center"
        justifyContent='center'>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={nameError} 
            >
            <InputLabel shrink htmlFor="grad">
                Grad Year
            </InputLabel>
            <BootstrapInput value={grad} id="grad"
            // @ts-ignore
                onChange={e => setGrad(e.target.value)}
                // onBlur={validateGrad}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={nameError} 
            >
            <InputLabel shrink htmlFor="gpa">
                GPA 
            </InputLabel>
            <BootstrapInput value={gpa} id="gpa"
            // @ts-ignore
                onChange={e => setGpa(e.target.value)}
                // onBlur={validateGrad}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={emailError} 
            >
            <InputLabel shrink htmlFor="actSatScore">
                ACT/SAT Score
            </InputLabel>
            <BootstrapInput value={actSatScore} id="actSatScore"
            // @ts-ignore
                onChange={e => setActSat(e.target.value)}
                // onBlur={validateEmail}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={phoneError} 
            >
            <InputLabel shrink htmlFor="firstGen">
                First Generation 
            </InputLabel>
            <BootstrapInput value={firstGen} id="firstGen"
            // @ts-ignore
                onChange={e => setFirstGen(e.target.value)}
                // onBlur={validatePhone}
                // inputComponent={TextMaskCustom as any}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={phoneError} 
            >
            <InputLabel shrink htmlFor="acaDis">
                Academic Disruption 
            </InputLabel>
            <BootstrapInput value={academicDisruption} id="acaDis"
            // @ts-ignore
                onChange={e => setAcaDis(e.target.value)}
                // onBlur={validatePhone}
                // inputComponent={TextMaskCustom as any}
                />
        </FormControl>
        </Grid>
        <Grid item xs={9}>
        <FormControl variant="standard"
            sx={{width: '100%'}}
            // error={phoneError} 
            >
            <InputLabel shrink htmlFor="upwardTraj">
                Upward Trajectory
            </InputLabel>
            <BootstrapInput value={upwardTrajectory} id="upwardTraj"
            // @ts-ignore
                onChange={e => setUpwardTrajectory(e.target.value)}
                // onBlur={validatePhone}
                // inputComponent={TextMaskCustom as any}
                />
        </FormControl>
        </Grid>
        </Grid>
    );
  } else if (page===3) {
      pageContent = (
        <SearchSchools />
      );
  }
  console.log(page, backable, continuable);
  return (
    <Box 
        component="form"
        sx={{ 
            width: 500,
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' },
            backgroundColor: '#FFFAF5'}}>
        <LinearProgress variant='determinate' value={Math.round((page+1)/pages*100)} />
        <br/>
        {pageContent}
        <br/><br/>
        <Grid container spacing={2} sx={{textAlign: 'center'}} justifyContent="center" alignItems="center" >
          <Grid item xs={5}>
            <Button sx={{color: 'white',backgroundColor: '#F8CF40', width: '100%'}} onClick={e=> {pageUpdate(-1)}} disabled={!backable} >Back</Button>
          </Grid>
          <Grid item xs={5}>
            <Button sx={{color: 'white', backgroundColor: '#3B45BB', width: '100%'}} onClick={e=> {pageUpdate(+1)}} disabled={!continuable} >Continue</Button>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Formpage;