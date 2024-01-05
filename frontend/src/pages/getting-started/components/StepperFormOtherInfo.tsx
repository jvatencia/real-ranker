import { Button, ClassNameMap, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CustomFormControl from "../../../components/styled/CustomFormControl";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(
    (theme: any) => ({

    })
);


interface StepperOtherInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
}

const StepperFormOtherInfo = ({ activeStep, setActiveStep, outerClasses }: StepperOtherInfoProps) => {
    const classes: any = useStyles(outerClasses);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    return (
        <div className={outerClasses.formContainer}>
            <form action="">
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Grad Year" type="number" name="gradYear" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="GPA" name="gpa" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="ACT/SAT Score" name="actSatScore" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="First Generation" name="firstGen" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Academic Disruption" name="academicDisruption" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Upward Trajectory" name="upwardTrajectory" />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Family Income Range" name="familyIncome"
                            onChange={() => null} value={1}>
                            <MenuItem value={1}>$0 - $30k</MenuItem>
                            <MenuItem value={2}>$30k - $48k</MenuItem>
                            <MenuItem value={3}>$48k - $75k</MenuItem>
                            <MenuItem value={4}>$75k - $110k</MenuItem>
                            <MenuItem value={5}>$110k +</MenuItem>
                        </TextField>
                    </CustomFormControl>
                </FormGroup>

                <div className={outerClasses.actionBtns}>
                    <Button variant="text" size="large" onClick={handleBack}>Back</Button>
                    <Button variant="contained" size="large" onClick={handleNext}>Next</Button>
                </div>
            </form>
        </div>
    );
}

export default StepperFormOtherInfo;