import { Button, ClassNameMap, FormGroup, TextField } from "@mui/material";
import CustomFormControl from "../../../components/styled/CustomFormControl";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useCollegeStore from "../../../store/college/college.store";

const useStyles = makeStyles(
    (theme: any) => ({

    })
);

interface StepperFormPersonalInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
    collegeForm: any;
}

const StepperFormPersonalInfo = ({ activeStep, setActiveStep, outerClasses, collegeForm }: StepperFormPersonalInfoProps) => {
    const classes: any = useStyles(outerClasses);
    const setCollegeForm = useCollegeStore((state) => state.setForm);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        console.log(collegeForm);
        if (Object.keys(collegeForm).length > 0)
            setForm((oldState) => ({ ...oldState, ...collegeForm }));
    }, [collegeForm])

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleInputChange = (event: any, input: 'name' | 'email' | 'phone') => {
        setForm((oldState) => ({ ...oldState, [input]: event.target.value }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setCollegeForm(form);
        handleNext();
    }

    return (
        <div className={outerClasses.formContainer}>
            <p>Real Ranker works for you, but it needs to know you.</p>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Name"
                            name="name"
                            value={form.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Phone Number"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={(e) => handleInputChange(e, 'phone')}
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