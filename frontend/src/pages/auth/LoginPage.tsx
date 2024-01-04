import { Button, FormControl, FormGroup, Input, InputLabel, Paper, TextField } from "@mui/material";
import ResponsiveBox from "../../components/commons/ResponsiveBox";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { login } from "../../api/auth.api";
import { useState } from "react";

const useStyles = makeStyles(
    (theme: any) => ({
        loginForm: {
            width: '400px',
            height: '500px',
            padding: '50px 40px',
        },
        loginInput: {
            backgroundColor: '#fff !important'
        }
    })
)

const CustomFormControl = styled((FormControl))(({ theme }) => ({
    marginBottom: '10px'
}))
export default function LoginPage() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e: any) => {
        e.preventDefault();
        const response = await login({ email, password });

        console.log(response);
    }

    const onInputChange = (event: any, input: 'email' | 'password') => {
        if (input === 'email') {
            setEmail(event.target.value);
        } else if (input === 'password') {
            setPassword(event.target.value);
        }
    }

    return (
        <ResponsiveBox hasPadding>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: '80px'
            }}>
                <Paper square={false} className={classes.loginForm} elevation={3}>
                    <h3>Sign in to continue</h3>
                    <hr />
                    <form onSubmit={loginUser} >
                        <FormGroup>
                            <CustomFormControl>
                                <TextField
                                    className={classes.loginInput}
                                    label="Email"
                                    type="email"
                                    variant="filled"
                                    value={email}
                                    onChange={(e) => onInputChange(e, 'email')}
                                ></TextField>
                            </CustomFormControl>
                            <CustomFormControl>
                                <TextField
                                    className={classes.loginInput}
                                    label="Password"
                                    type="password"
                                    variant="filled"
                                    value={password}
                                    onChange={(e) => onInputChange(e, 'password')}
                                ></TextField>
                            </CustomFormControl>
                            <Button variant="contained" type="submit" size="large">Sign In</Button>
                        </FormGroup>
                    </form>
                </Paper>
            </div>
        </ResponsiveBox>
    );
}
