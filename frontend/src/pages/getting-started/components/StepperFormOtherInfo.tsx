import { Button, ClassNameMap, FormGroup, MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import useCollegeStore from "../../../store/college/college.store";
import { CustomFormControl } from "../../../components/styled";
import { FAMILY_INCOME_RANGE, SELF_EVALUATION } from "../../../utils";


const useStyles = makeStyles(
    (theme: any) => ({
        otherInfoForm: {

        }
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
        firstGen: 0,
        selfEvaluation: 0,
        academicDisruption: 0,
        upwardTrajectory: 0,
        familyObligation: 0,
        familyIncome: 3,
        activity: []
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleInputChange = (event: any, input:
        'gradYear' | 'gpa' | 'actSatScore' | 'firstGen' | 'academicDisruption'
        | 'upwardTrajectory' | 'familyIncome' | 'familyObligation' | 'selfEvaluation') => {
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
            <form action="" className={classes.otherInfoForm}>
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
                            type="number"
                            name="gpa"
                            onChange={(e) => handleInputChange(e, 'gpa')}
                            value={form.gpa}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="ACT/SAT Score"
                            type="number"
                            name="actSatScore"
                            onChange={(e) => handleInputChange(e, 'actSatScore')}
                            value={form.actSatScore}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="First Generation"
                            name="firstGen"
                            onChange={(e) => handleInputChange(e, 'firstGen')}
                            value={form.firstGen}
                        >
                            <MenuItem value={0}>
                                No
                            </MenuItem>
                            <MenuItem value={1}>
                                Yes
                            </MenuItem>
                        </TextField>
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Academic Disruption"
                            name="academicDisruption"
                            onChange={(e) => handleInputChange(e, 'academicDisruption')}
                            value={form.academicDisruption}
                        >
                            <MenuItem value={0}>
                                No
                            </MenuItem>
                            <MenuItem value={1}>
                                Yes
                            </MenuItem>
                        </TextField>
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Upward Trajectory"
                            name="upwardTrajectory"
                            onChange={(e) => handleInputChange(e, 'upwardTrajectory')}
                            value={form.upwardTrajectory}
                        >
                            <MenuItem value={0}>
                                No
                            </MenuItem>
                            <MenuItem value={1}>
                                Yes
                            </MenuItem>
                        </TextField>
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Family Obligations"
                            name="familyObligation"
                            onChange={(e) => handleInputChange(e, 'familyObligation')}
                            value={form.familyObligation}
                        >
                            <MenuItem value={0}>
                                No
                            </MenuItem>
                            <MenuItem value={1}>
                                Yes
                            </MenuItem>
                        </TextField>
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Evaluation"
                            name="selfEvaluation"
                            onChange={(e) => handleInputChange(e, 'selfEvaluation')}
                            value={form.selfEvaluation}
                        >
                            {
                                SELF_EVALUATION.map((item, index) => (
                                    <MenuItem value={item.value} key={`selfEvaluationMenuItem${index}${item.value}`}>
                                        {item.text}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Family Income Range"
                            name="familyIncome"
                            onChange={(e) => handleInputChange(e, 'familyIncome')}
                            value={form.familyIncome}
                        >
                            {
                                FAMILY_INCOME_RANGE.map((item, index) => (
                                    <MenuItem value={item.value} key={`familyIncomeRangeMenuItem${index}${item.value}`}>
                                        {item.text}
                                    </MenuItem>
                                ))
                            }
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