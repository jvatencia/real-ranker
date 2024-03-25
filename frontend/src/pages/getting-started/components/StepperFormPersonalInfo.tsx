import { Button, ClassNameMap, FormGroup, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { CustomFormControl } from "../../../components/styled";
import useAuthStore from "../../../store/auth/auth.store";
import { useForm, SubmitHandler } from "react-hook-form"

const useStyles = makeStyles(
    (theme: any) => ({
        personalInfoForm: {

        }
    })
);

type PersonalInfoForm = {
    displayName: string;
    email: string;
    phoneNumber: string;
}

interface StepperFormPersonalInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
    collegeForm: any;
}

const StepperFormPersonalInfo = ({ activeStep, setActiveStep, outerClasses, collegeForm }: StepperFormPersonalInfoProps) => {
    const classes: any = useStyles(outerClasses);
    const auth = useAuthStore((state) => state.auth)
    const setAuth = useAuthStore((state) => state.setAuth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PersonalInfoForm>({
        defaultValues: {
            ...auth
        }
    });

    useEffect(() => {
        console.log('[personal-info-form] auth', auth);
        console.log('[personal-info-form] errors', errors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleFormSubmit: SubmitHandler<PersonalInfoForm> = (data: any) => {
        console.log('[personal-info-form] handleFormSubmit', data);
        setAuth(data);
        handleNext();
    }

    return (
        <div className={outerClasses.formContainer}>
            <p>Real Ranker works for you, but it needs to know you.</p>
            <form onSubmit={handleSubmit(handleFormSubmit)} className={classes.personalInfoForm}>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Name"
                            error={!!errors.displayName}
                            defaultValue={auth?.displayName}
                            helperText={!!errors.displayName && errors.displayName.type === 'required' && 'Name is required'}
                            {...register('displayName', { required: true })}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Email"
                            type="email"
                            defaultValue={auth?.email}
                            disabled={!!auth?.email}
                            {...register('email', { required: true })}

                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Phone Number"
                            type="tel"
                            error={!!errors.phoneNumber}
                            defaultValue={auth?.phoneNumber}
                            helperText={!!errors.phoneNumber && errors.phoneNumber.type === 'required' && 'Phone Number is required'}
                            {...register('phoneNumber', { required: true })}
                        />
                    </CustomFormControl>
                </FormGroup>
                <div className={outerClasses.actionBtns}>
                    <Button variant="contained" size="large" type="submit">Next</Button>
                </div>
            </form>
        </div>
    );
}

export default StepperFormPersonalInfo;