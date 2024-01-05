import { Button, ClassNameMap, FormGroup, TextField } from "@mui/material";
import CustomFormControl from "../../../components/styled/CustomFormControl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme: any) => ({

    })
);

interface StepperFormPersonalInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
}

const StepperFormPersonalInfo = ({ activeStep, setActiveStep, outerClasses }: StepperFormPersonalInfoProps) => {
    const classes: any = useStyles(outerClasses);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    return (
        <div className={outerClasses.formContainer}>
            <p>Real Ranker works for you, but it needs to know you.</p>
            <form action="">
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Name" name="name" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Email" type="email" name="email" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Phone Number" type="tel" name="phone" />
                    </CustomFormControl>
                </FormGroup>
                <div className={outerClasses.actionBtns}>
                    <Button variant="contained" size="large" onClick={handleNext}>Next</Button>
                </div>
            </form>
        </div>
    );
}

export default StepperFormPersonalInfo;