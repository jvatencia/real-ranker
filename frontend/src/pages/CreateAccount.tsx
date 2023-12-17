
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from "@mui/material";

import { BootstrapInput } from "../components/utilities/BootstrapInput";
import TextField from '@mui/material/TextField';
import { validateEmail } from '../utils/utilities';
import PasswordStrengthBar from 'react-password-strength-bar';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEerror] = useState(false);
    const [password, setPassword] = useState('');
    const [passwerd, setPasswerd] = useState('');
    const [pwdError, setPerror] = useState(false);

    const email_error_text = "Ensure you enter a valid email!";
    const password_error_text = "The passwords gotta match";

    function initiateSignup() {
        //TODO fetch post
    }

    function validate_email() {
        setEerror(validateEmail(email));
    }
    function validate_password() {
        setPerror(password !== passwerd);
    }
    return (
        <div>
        <Box >
            <Typography sx={{fontFamily:'Poppins'}} gutterBottom>
            Email
            </Typography>
        </Box>
        <Grid item xs={12}>
            <TextField
                label="email"
                helperText={emailError ? email_error_text : null}
                error={emailError}
                // onChange={e => this.changeValue(e, 'password')}
                // onBlur={this.isDisabled} 
                onChange={e => setEmail(e.target.value)}
                onBlur={validate_email}
                />
        {/* <FormControl variant="standard"
            error={emailError} 
            sx={{width: '100%'}}
            >
            <BootstrapInput value={email} id="email"
            // @ts-ignore
                onChange={e => setEmail(e.target.value)}
                onBlur={validate_email}
                />
        </FormControl> */}
        </Grid>
        <Box >
            <Typography sx={{fontFamily:'Poppins'}} gutterBottom>
            Password
            </Typography>
        </Box>
        <Grid item xs={12} >
        {/* <FormControl variant="standard"
            sx={{width: '100%'}}
            error={pwdError} 
            >
            <BootstrapInput value={password} id="password"
            // @ts-ignore
                onChange={e => setPassword(e.target.value)}
                onBlur={validate_password}
                type="password"
                />
        </FormControl> */}
            <TextField
                label="password"
                type="password"
                error={pwdError}
                helperText={pwdError ? password_error_text : null}
                onChange={e => setPassword(e.target.value)}
                onBlur={validate_password}
                />
        </Grid>
        <Box mt={1}>

        <Grid item xs={12}>
            <TextField
                label="password confirmation"
                type="password"
                error={pwdError}
                helperText={pwdError ? password_error_text : null}
                onChange={e => setPasswerd(e.target.value)}
                onBlur={validate_password}
                />
        </Grid>
        </Box>
        <Grid item xs={12}>
            <PasswordStrengthBar password={password} />
        </Grid>
        <Grid item xs={9}>
        <Button sx={{color: 'white', backgroundColor: '#3B45BB', width: '100%'}} onClick={e=> {initiateSignup();}} disabled={!(emailError || pwdError || (email == '') || (password==''))}>Create Account</Button>
        </Grid>
        </div>
    );
}

export default CreateAccount;