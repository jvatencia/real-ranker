import { ClassNameMap } from "notistack";
import { useForm, SubmitHandler } from "react-hook-form";
import useCollegeStore from "../../../store/college/college.store";
import { makeStyles } from "@mui/styles";
import { FormGroup, TextField, MenuItem, Fab } from "@mui/material";
import { CustomFormControl } from "../../../components/styled";
import { getErrorMessage } from "../../../utils";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";

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

interface StepperFormEducationalInfoProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
    collegeForm: any;
}


export function StepperFormEducationalInfo({ activeStep, setActiveStep, outerClasses, collegeForm }: StepperFormEducationalInfoProps) {
    const classes: any = useStyles(outerClasses);
    const form = useCollegeStore((state) => state.form);
    const setCollegeForm = useCollegeStore((state) => state.setForm);
    const defaultForm = {
        ...form,
        firstGen: 0,
        academicDisruption: 0,
        upwardTrajectory: 0,
        familyObligation: 0,
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
        setCollegeForm(data);
        handleNext();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className={classes.otherInfoForm}>
                <FormGroup>
                    <CustomFormControl>
                        <TextField select label="First Generation"
                            error={!!errors.firstGen}
                            defaultValue={defaultForm.firstGen}
                            helperText={getErrorMessage(errors, 'firstGen', 'First Generation is required')}
                            {...register('firstGen', { required: true })}
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
                            error={!!errors.academicDisruption}
                            defaultValue={defaultForm.academicDisruption}
                            helperText={getErrorMessage(errors, 'academicDisruption', 'Academic Disruption is required')}
                            {...register('academicDisruption', { required: true })}
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
                            error={!!errors.upwardTrajectory}
                            defaultValue={defaultForm.upwardTrajectory}
                            helperText={getErrorMessage(errors, 'upwardTrajectory', 'Upward Trajectory is required')}
                            {...register('upwardTrajectory', { required: true })}
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
                            error={!!errors.familyObligation}
                            defaultValue={defaultForm.familyObligation}
                            helperText={getErrorMessage(errors, 'familyObligation', 'Family Obligations is required')}
                            {...register('familyObligation', { required: true })}
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