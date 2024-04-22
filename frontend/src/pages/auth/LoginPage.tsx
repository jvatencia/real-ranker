import { Alert, Button, FormGroup, Paper, TextField } from "@mui/material";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/auth/auth.store";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { CustomFormControl } from "../../components/styled";

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

export default function LoginPage() {
    const classes = useStyles();
    const hasError = useAuthStore((state) => state.authResponse);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuthStore((state) => state.auth);
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const loginUser = async (e: any) => {
        e.preventDefault();
        login({ email, password });
    }

    useEffect(() => {
        if (auth != null) navigate('/colleges/compare');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    const onInputChange = (event: any, input: 'email' | 'password') => {
        if (input === 'email') {
            setEmail(event.target.value);
        } else if (input === 'password') {
            setPassword(event.target.value);
        }
    }

    return (
        <Layout>
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
                        {
                            hasError &&
                            <Alert severity="error" style={{ marginBottom: '10px' }}>Invalid credentials. Please try again.</Alert>
                        }
                        <form onSubmit={loginUser} >
                            <FormGroup>
                                <CustomFormControl>
                                    <TextField
                                        className={classes.loginInput}
                                        label="Email"
                                        type="email"
                                        variant="filled"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e, 'email')}
                                    ></TextField>
                                </CustomFormControl>
                                <CustomFormControl>
                                    <TextField
                                        className={classes.loginInput}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        variant="filled"
                                        value={password}
                                        onChange={(e) => onInputChange(e, 'password')}
                                    ></TextField>
                                </CustomFormControl>
                                <Button color="secondary" variant="contained" type="submit" size="large">Sign In</Button>
                            </FormGroup>
                        </form>
                        <hr />
                        <p>Don't have an account? <Link to='/sign-up' color="secondary">Sign up here.</Link></p>
                    </Paper>
                </div>
            </ResponsiveBox>
        </Layout>
    );
}
