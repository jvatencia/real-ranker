import { Step, StepLabel, Stepper } from "@mui/material";
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

const useStyles = makeStyles(
    (theme: any) => ({
        formContainer: {
            marginTop: '50px',
            width: '500px',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]: {
                marginTop: '20px',
                width: '100%'
            }
        },
        actionBtns: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'flex-end',
            }
        }
    })
);


const getStepContent = (props: any) => {
    switch (props.activeStep) {
        case 0:
        default: return <StepperFormPersonalInfo {...props} />
        case 1: return <StepperDisclaimer {...props} />
        case 2: return <StepperFormOtherInfo {...props} />
        case 3: return <SelectUniversity {...props} />
    }
}

export default function GettingStartedPage() {

    const classes = useStyles();

    const steppers = [
        { index: 0, key: 'personal_info', title: 'Personal Information' },
        { index: 1, key: 'disclaimer', title: 'Disclaimer' },
        { index: 2, key: 'other_info', title: 'Other Information' },
        { index: 3, key: 'select_colleges', title: 'Select Colleges' },
    ];

    const [activeStep, setActiveStep] = useState(0);
    const collegeForm = useCollegeStore(useShallow((state) => state.form));



    return (
        <ResponsiveBox hasPadding>
            <PageBody>
                <Stepper activeStep={activeStep}
                    alternativeLabel
                    orientation={'horizontal'}>
                    {steppers.map((step) => (
                        <Step key={step.key}>
                            <StepLabel>{step.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {getStepContent({ activeStep, setActiveStep, outerClasses: classes, collegeForm })}
                </div>
            </PageBody>
        </ResponsiveBox >
    );
}