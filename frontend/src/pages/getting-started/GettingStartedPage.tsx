import { Step, StepLabel, Stepper, stepIconClasses, stepLabelClasses } from "@mui/material";
import PageBody from "../../components/commons/PageBody";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { useState } from "react";
import StepperFormPersonalInfo from "./components/StepperFormPersonalInfo";
import StepperFormOtherInfo from "./components/StepperFormOtherInfo";
import StepperDisclaimer from "./components/StepperDisclaimer";
import SelectUniversity from "./components/SelectUniversity";
import { makeStyles } from "@mui/styles";
import useCollegeStore from "../../store/college/college.store";
import { useShallow } from "zustand/react/shallow";
import { useTheme } from "@mui/system";
import { StepperFormEducationalInfo } from "./components/StepperFormEducationalInfo";

const useStyles = makeStyles(
    (theme: any) => ({
        formContainer: {
            marginTop: '50px',
            width: '500px',
            height: 'calc(100vh - 56px)',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]: {
                marginTop: '20px',
                width: '100%'
            }
        },
        actionBtns: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'center',
            }
        },
        stepComponent: {
            "svg.MuiSvgIcon-root.Mui-active": {
                color: theme.palette.secondary.main + ' !important'
            },
        },
        stepperCard: {
            padding: '32px',
            border: '1px solid rgba(0,0,0,0.3)',
            boxShadow: '0px 3px 5px rgba(0,0,0,0.3)',
            height: 'auto',
            borderRadius: '15px'
        }
    })
);


const getStepContent = (props: any) => {
    switch (props.activeStep) {
        case 1: return <StepperDisclaimer {...props} />
        case 2: return <StepperFormOtherInfo {...props} />
        case 3: return <StepperFormEducationalInfo {...props} />
        case 4: return <SelectUniversity {...props} />
        case 0:
        default: return <StepperFormPersonalInfo {...props} />
    }
}

export default function GettingStartedPage() {

    const classes = useStyles();

    const steppers = [
        { index: 0, key: 'personal_info', title: 'Personal Information' },
        { index: 1, key: 'disclaimer', title: 'Disclaimer' },
        { index: 2, key: 'educ_info', title: 'Educational Information' },
        { index: 3, key: 'other_info', title: 'Other Information' },
        { index: 4, key: 'select_colleges', title: 'Select Colleges' },
    ];

    const [activeStep, setActiveStep] = useState(0);
    const collegeForm = useCollegeStore(useShallow((state) => state.form));
    const theme = useTheme();


    return (
        <ResponsiveBox hasPadding>
            <PageBody>
                <Stepper activeStep={activeStep}
                    alternativeLabel
                    orientation={'horizontal'}>
                    {steppers.map((step) => (
                        <Step key={step.key}>
                            <StepLabel className={classes.stepComponent}>{step.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <div className={classes.formContainer}>
                        <div className={classes.stepperCard}>
                            {getStepContent({ activeStep, setActiveStep, outerClasses: classes, collegeForm })}
                        </div>
                    </div>
                </div>
            </PageBody>
        </ResponsiveBox >
    );
}