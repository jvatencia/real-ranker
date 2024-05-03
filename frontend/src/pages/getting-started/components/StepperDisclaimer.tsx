import { Button, ClassNameMap } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme: any) => ({
        disclaimerForm: {

        }
    })
);

interface StepperDisclaimerProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
}

const StepperDisclaimer = ({ activeStep, setActiveStep, outerClasses }: StepperDisclaimerProps) => {
    const classes = useStyles(outerClasses);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    return (
        <div className={outerClasses.formContainer}>
            <p>To get results from our admissions calculator,
                get actionable college advice, create a curated admissions experience,
                and get a wholly custom, curated college ranking made just for you...
                you have to fill out the long form.</p>
            <p>Skip parts that you don't feel comfortable/don't know.</p>
            <p>We don't sell your data. We don't double sell your data. We don't double dog sell your data.
                (All questions are mandatory but there are options for prefer not to say).</p>
            <form action="" className={classes.disclaimerForm}>
                <div className={outerClasses.actionBtns}>
                    <Button variant="text" size="large" color="secondary" onClick={handleBack}>Back</Button>
                    <Button variant="contained" size="large" color="secondary" onClick={handleNext}>Next</Button>
                </div>
            </form>
        </div>
    );
}

export default StepperDisclaimer;