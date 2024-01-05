import { Button, CircularProgress, ClassNameMap, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import useCollegeStore from "../../../store/college/college.store";
import { useShallow } from "zustand/react/shallow";
import { Typeahead } from "react-bootstrap-typeahead";
import CustomFormControl from "../../../components/styled/CustomFormControl";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles(
    (theme: any) => ({
        collegeLoader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 5px'
        }
    })
);

interface SelectUniversityProps {
    activeStep: number;
    setActiveStep: any;
    outerClasses: ClassNameMap;
}


const SelectUniversity = ({ activeStep, setActiveStep, outerClasses }: SelectUniversityProps) => {
    const classes: any = useStyles(outerClasses);
    const colleges = useCollegeStore(useShallow((state) => state.colleges));
    const fetchUniversities = useCollegeStore((state) => state.fetchUniversities);
    const setSelectedCollege = useCollegeStore((state) => state.setSelectedCollege);
    const [selectedColleges, setSelectedColleges] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(colleges)
        if (colleges.length === 0) {
            fetchUniversities();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colleges]);

    const handleNext = () => {
        if (selectedColleges.length > 0) {
            setSelectedCollege(selectedColleges);
            navigate('/dashboard');
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleUniversityInputChange = (values: any) => {
        console.log('handleUniversityInputChange', values)
        if (values.length > 0) {
            setSelectedColleges(values);
        }
    }

    return (
        <div>
            <div className={outerClasses.formContainer}>
                <form action="">
                    {
                        colleges.length > 0 ?
                            <CustomFormControl style={{ width: '100%' }}>
                                <label>Select Colleges:</label>
                                <Typeahead
                                    id="id"
                                    multiple
                                    labelKey={(option: any) =>
                                        `${option['instnm']}`
                                    }
                                    onChange={handleUniversityInputChange}
                                    placeholder="Search here..."
                                    options={colleges}
                                ></Typeahead>
                            </CustomFormControl> :
                            <div className={classes.collegeLoader}>
                                <CircularProgress size={20} style={{ marginRight: '10px' }} /> Loading colleges please wait...
                            </div>
                    }
                    <div className={outerClasses.actionBtns}>
                        <Button variant="text" size="large" color="secondary" onClick={handleBack}>Back</Button>
                        <Button variant="contained" size="large" onClick={handleNext} disabled={selectedColleges.length === 0}>Next</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SelectUniversity;