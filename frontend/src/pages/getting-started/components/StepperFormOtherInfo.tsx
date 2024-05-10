import { Checkbox, ClassNameMap, Fab, FormControlLabel, FormGroup, MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useCollegeStore from "../../../store/college/college.store";
import { CustomFormControl } from "../../../components/styled";
import { FAMILY_INCOME_RANGE, SELF_EVALUATION, getErrorMessage } from "../../../utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { useState } from "react";


const useStyles = makeStyles(
    (theme: any) => ({
        otherInfoForm: {

        }
    })
);

type OtherInfoForm = {
    gradYear: string | null,
    gpa: number | null,
    scoreMode: 'act' | 'sat' | null,
    actSatScore: number | null,
    firstGen?: number,
    selfEvaluation: number,
    academicDisruption?: number,
    upwardTrajectory?: number,
    familyObligation?: number,
    familyIncome: number,
    activity: any[]
}


interface StepperOtherInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
    collegeForm: any;
}

const StepperFormOtherInfo = ({ activeStep, setActiveStep, outerClasses, collegeForm }: StepperOtherInfoProps) => {
    const classes: any = useStyles(outerClasses);
    const setCollegeForm = useCollegeStore((state) => state.setForm);
    const [scoreMode, setScoreMode] = useState('sat');
    const defaultForm = {
        gradYear: null,
        gpa: null,
        scoreMode: null,
        actSatScore: null,
        firstGen: 0,
        selfEvaluation: 0,
        academicDisruption: 0,
        upwardTrajectory: 0,
        familyObligation: 0,
        familyIncome: 3,
        activity: []
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<OtherInfoForm>({
        defaultValues: defaultForm
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }


    const handleFormSubmit: SubmitHandler<OtherInfoForm> = (data: any) => {
        console.log('[other-info-form] handleFormSubmit', data);
        setCollegeForm({ ...data, scoreMode });
        handleNext();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className={classes.otherInfoForm}>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="Grad Year"
                            type="number"
                            error={!!errors.gradYear}
                            defaultValue={defaultForm.gradYear}
                            helperText={getErrorMessage(errors, 'gradYear', 'Graduation Year is required')}
                            {...register('gradYear', { required: true })}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label="GPA"
                            type="number"
                            inputProps={{
                                step: 0.1
                            }}
                            error={!!errors.gpa}
                            defaultValue={defaultForm.gpa}
                            helperText={getErrorMessage(errors, 'gpa', 'GPA is required')}
                            {...register('gpa', { required: true })}
                        />
                    </CustomFormControl>
                </FormGroup>
                <FormGroup sx={{ flexDirection: 'row' }}>
                    <FormControlLabel control={
                        <Checkbox color="secondary" onClick={(e) => setScoreMode('sat')} checked={scoreMode === 'sat'} />
                    } label="SAT" />
                    <FormControlLabel control={
                        <Checkbox color="secondary" onClick={(e) => setScoreMode('act')} checked={scoreMode === 'act'} />
                    } label="ACT" />
                </FormGroup>
                <FormGroup>
                    <CustomFormControl>
                        <TextField label={scoreMode === 'sat' ? 'SAT Score' : 'ACT Score'}
                            type="number"
                            error={!!errors.actSatScore}
                            defaultValue={defaultForm.actSatScore}
                            helperText={getErrorMessage(errors, 'actSatScore', 'ACT/SAT Score is required')}
                            {...register('actSatScore', { required: true })}
                        />
                    </CustomFormControl>
                </FormGroup>

                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="Evaluation"
                            error={!!errors.selfEvaluation}
                            defaultValue={defaultForm.selfEvaluation}
                            helperText={getErrorMessage(errors, 'selfEvaluation', 'Evaluation is required')}
                            {...register('selfEvaluation', { required: true })}
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
                            error={!!errors.familyIncome}
                            defaultValue={defaultForm.familyIncome}
                            helperText={getErrorMessage(errors, 'familyIncome', 'Family Income Range is required')}
                            {...register('familyIncome', { required: true })}
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
                    <Fab color="secondary" onClick={handleBack}>
                        <ArrowBackIosOutlined fontSize="inherit" />
                    </Fab>
                    <Fab type="submit" sx={{ marginLeft: '10px' }} color="secondary">
                        <ArrowForwardIosOutlined fontSize="inherit" />
                    </Fab>
                </div>
            </form>
        </div>
    );
}

export default StepperFormOtherInfo;