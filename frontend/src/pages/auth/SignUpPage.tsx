import { Button, FormGroup, Paper, TextField } from "@mui/material";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/auth/auth.store";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { CustomFormControl } from "../../components/styled";

const useStyles = makeStyles(
    (theme: any) => ({
        signUpForm: {
            width: '400px',
            height: '500px',
            padding: '50px 40px',
        },
        signUpInput: {
            backgroundColor: '#fff !important'
        }
    })
)

export default function SignUpPage() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const auth = useAuthStore((state) => state.auth);
    const signUp = useAuthStore((state) => state.registerUser);

    const registerUser = async (e: any) => {
        e.preventDefault();
        console.log(`[registerUser]`, { email, password, confirmPassword })
        signUp({
            email,
            password
        });
    }

    useEffect(() => {
        if (auth != null) navigate('/colleges/compare');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    const onInputChange = (event: any, input: 'email' | 'password' | 'confirmPassword') => {
        if (input === 'email') {
            setEmail(event.target.value);
        } else if (input === 'password') {
            setPassword(event.target.value);
        } else if (input === 'confirmPassword') {
            setConfirmPassword(event.target.value);
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
                    <Paper square={false} className={classes.signUpForm} elevation={3}>
                        <h3>Sign Up</h3>
                        <hr />
                        <form onSubmit={registerUser} >
                            <FormGroup>
                                <CustomFormControl>
                                    <TextField
                                        className={classes.signUpInput}
                                        label="Email"
                                        type="email"
                                        variant="filled"
                                        value={email}
                                        onChange={(e) => onInputChange(e, 'email')}
                                    ></TextField>
                                </CustomFormControl>
                                <CustomFormControl>
                                    <TextField
                                        className={classes.signUpInput}
                                        label="Password"
                                        type="password"
                                        variant="filled"
                                        value={password}
                                        onChange={(e) => onInputChange(e, 'password')}
                                    ></TextField>
                                </CustomFormControl>
                                <CustomFormControl>
                                    <TextField
                                        className={classes.signUpInput}
                                        label="Confirm Password"
                                        type="password"
                                        variant="filled"
                                        value={confirmPassword}
                                        onChange={(e) => onInputChange(e, 'confirmPassword')}
                                    ></TextField>
                                </CustomFormControl>
                                <Button variant="contained" type="submit" size="large">Sign Up</Button>
                            </FormGroup>
                        </form>
                        <hr />
                        <p>Already have an account? <Link to='/login' color="primary">Sign in here.</Link></p>

                    </Paper>
                </div>
            </ResponsiveBox>
        </Layout>
    );
}
