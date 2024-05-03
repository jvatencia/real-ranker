import { Button, FormGroup, Paper, TextField } from "@mui/material";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/auth/auth.store";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { CustomFormControl } from "../../components/styled";
import { showToast, validateEmail } from "../../utils";

const useStyles = makeStyles(
    (theme: any) => ({
        signUpForm: {
            width: '450px',
            height: '600px',
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
    const [errors, setErrors] = useState<any[]>([]);
    const navigate = useNavigate();

    const auth = useAuthStore((state) => state.auth);
    const signUp = useAuthStore((state) => state.registerUser);

    const registerUser = async (e: any) => {
        e.preventDefault();
        console.log(`[registerUser]`, { email, password, confirmPassword })
        if (validateForm()) {

            signUp({
                email,
                password
            });
        }
    }



    useEffect(() => {
        console.log('errors ', errors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors, setErrors])

    const validateForm = () => {
        const errorList = [];
        if (!email) {
            errorList.push({ input: 'email', message: 'Email is required' });
        } else if (validateEmail(email)) {
            errorList.push({ input: 'email', message: 'Invalid format' });
        }

        if (!password) {
            errorList.push({ input: 'password', message: 'Password is required' });
        }

        if (!confirmPassword) {
            errorList.push({ input: 'confirmPassword', message: 'Confirm Password is required' });
        }

        if (password !== confirmPassword) {
            showToast('Password do not match', {
                variant: 'error'
            });
            errorList.push({ input: 'password', message: 'Password do not match' });
            errorList.push({ input: 'confirmPassword', message: 'Password do not match' });
        }

        if (errorList.length > 0) {
            setErrors(errorList);
        }

        console.log(errorList);

        return errorList.length === 0;
    }

    useEffect(() => {
        if (auth != null) navigate('/colleges/compare');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    const onInputChange = (event: any, input: 'email' | 'password' | 'confirmPassword') => {
        if (input === 'email') {
            removeError(input);
            setEmail(event.target.value);
        } else if (input === 'password') {
            removeError(input);
            setPassword(event.target.value);
        } else if (input === 'confirmPassword') {
            removeError(input);
            setConfirmPassword(event.target.value);
        }
    }

    const checkError = (input: string) => {
        return errors.map(error => error.input).includes(input);
    }

    const removeError = (input: string) => {
        return setErrors(errors.filter((errorItem, index) => index !== errors.findIndex(error => error.input === input)));
    }

    const getErrorMessage = (input: string) => {
        return errors.find(error => error.input === input).message;
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
                                        error={checkError('email')}
                                        helperText={checkError('email') && getErrorMessage('email')}
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
                                        error={checkError('password')}
                                        helperText={checkError('password') && getErrorMessage('password')}
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
                                        error={checkError('confirmPassword')}
                                        helperText={checkError('confirmPassword') && getErrorMessage('confirmPassword')}
                                        className={classes.signUpInput}
                                        label="Confirm Password"
                                        type="password"
                                        variant="filled"
                                        value={confirmPassword}
                                        onChange={(e) => onInputChange(e, 'confirmPassword')}
                                    ></TextField>
                                </CustomFormControl>
                                <Button variant="contained" type="submit" size="large" color="secondary">Sign Up</Button>
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
