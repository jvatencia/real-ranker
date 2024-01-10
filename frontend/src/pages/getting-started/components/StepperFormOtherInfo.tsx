import { Button, ClassNameMap, FormGroup, MenuItem, TextField } from "@mui/material";
import CustomFormControl from "../../../components/styled/CustomFormControl";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import useCollegeStore from "../../../store/college/college.store";


const useStyles = makeStyles(
    (theme: any) => ({

    })
);


interface StepperOtherInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
    collegeForm: any;
}

const StepperFormOtherInfo = ({ activeStep, setActiveStep, outerClasses, collegeForm }: StepperOtherInfoProps) => {
    const classes: any = useStyles(outerClasses);
    const setCollegeForm = useCollegeStore((state) => state.setForm);
    const [form, setForm] = useState({
        gradYear: '',
        gpa: '',
        actSatScore: '',
        firstGen: '',
        academicDisruption: '',
        upwardTrajectory: '',
        familyIncome: 3
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleInputChange = (event: any, input:
        'gradYear' | 'gpa' | 'actSatScore' | 'firstGen' | 'academicDisruption' | 'upwardTrajectory' | 'familyIncome') => {
        setForm((oldState) => ({ ...oldState, [input]: event.target.value }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(form);
        setCollegeForm(form);
        handleNext();
    }

    return (
        <div className={outerClasses.formContainer}>
            <form action="">
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Grad Year"
                            type="number"
                            name="gradYear"
                            onChange={(e) => handleInputChange(e, 'gradYear')}
                            value={form.gradYear}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="GPA"
                            name="gpa"
                            onChange={(e) => handleInputChange(e, 'gpa')}
                            value={form.gpa}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="ACT/SAT Score"
                            name="actSatScore"
                            onChange={(e) => handleInputChange(e, 'actSatScore')}
                            value={form.actSatScore}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="First Generation"
                            name="firstGen"
                            onChange={(e) => handleInputChange(e, 'firstGen')}
                            value={form.firstGen}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Academic Disruption"
                            name="academicDisruption"
                            onChange={(e) => handleInputChange(e, 'academicDisruption')}
                            value={form.academicDisruption}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Upward Trajectory"
                            name="upwardTrajectory"
                            onChange={(e) => handleInputChange(e, 'upwardTrajectory')}
                            value={form.upwardTrajectory}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Family Income Range"
                            name="familyIncome"
                            onChange={(e) => handleInputChange(e, 'familyIncome')}
                            value={form.familyIncome}
                        >
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
                    <Button variant="contained" size="large" onClick={handleSubmit}>Next</Button>
                </div>
            </form>
        </div>
    );
}

export default StepperFormOtherInfo;