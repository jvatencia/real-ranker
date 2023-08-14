import { useEffect, useState, forwardRef } from "react";
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { IMaskInput } from 'react-imask';
import { alpha, styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: '90%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })); //taken from: https://mui.com/material-ui/react-text-field/

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
  function pageUpdate(pageDiff: number) {
    let newPage = page + pageDiff;
    console.log(page, newPage);
    let pages = 2;
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
        <Box >
        <FormControl variant="standard"
            sx={{width: 500}}
            error={nameError} 
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
        <FormControl variant="standard"
            error={emailError} 
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        </Box>
    );
  } else if (page === 1) {
    pageContent = (
        <div >
        <FormControl variant="standard"
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        <FormControl variant="standard"
            sx={{width: 500}}
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
        </div>
    );
  }
  console.log(backable, continuable);
  return (
    <Box 
        component="form"
        sx={{ 
            width: 500,
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' }}}>
        {pageContent}
        <Button onClick={e=> {pageUpdate(-1)}} disabled={!backable} variant="outlined">Back</Button>
        <Button onClick={e=> {pageUpdate(+1)}} disabled={!continuable} variant="contained">Continue</Button>
    </Box>
  );
};

export default Formpage;