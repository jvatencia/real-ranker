import { makeStyles } from "@mui/styles";
import { CustomFormControl } from "../../../components/styled";
import useCollegeStore from "../../../store/college/college.store";
import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FAMILY_INCOME_RANGE } from "../../../utils";

const useStyles = makeStyles(
    (theme) => ({
        formDetailsWrapper: {
            padding: '16px 10px',
            [theme.breakpoints.up('md')]: {
                maxWidth: '400px'
            }
        },
        formDetailTitle: {
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            fontSize: '18px',
            marginBottom: '12px',
        },
        formDetailFormTitle: {
            fontSize: '16px',
            fontFamily: 'Poppins',
            color: theme.palette.dark.light,
        },
        formDetailFormValue: {
            fontSize: '14px',
            color: theme.palette.primary.main,
            marginBottom: '15px'
        }
    })
)

interface FormDetailsProps {
    canEdit: boolean;
}

interface DispalyLabelInputProps extends FormDetailsProps {
    label?: string;
    formValue: any;
    formKey: string;
    setValue: any;
    type?: string
}

const DisplayLabelInput = ({ canEdit, label, formValue, formKey, setValue, type }: DispalyLabelInputProps) => {
    const classes = useStyles();

    return (
        <>{
            canEdit ?
                <CustomFormControl>
                    {
                        type === 'select' ?
                            <TextField select value={formValue}
                                size="small"
                                onChange={(e) => setValue(formKey, e.target.value)}>
                                {
                                    FAMILY_INCOME_RANGE.map((item, index) => (
                                        <MenuItem value={item.value} key={`familyIncomeRangeMenuItem${index}${item.value}`}>
                                            {item.text}
                                        </MenuItem>
                                    ))
                                }
                            </TextField> :
                            <TextField
                                type={type}
                                size="small"
                                multiline={type === 'textfield'}
                                rows={4}
                                maxRows={4}
                                value={formValue}
                                onChange={(e) => setValue(formKey, e.target.value)}
                            />
                    }
                </CustomFormControl>
                :
                <div className={classes.formDetailFormValue}>
                    {label || '(Empty)'}
                </div>
        }
        </>
    );
}

export default function FormDetails({ canEdit }: Readonly<FormDetailsProps>) {
    const classes = useStyles();
    const form = useCollegeStore((state) => state.form);
    const [formDetail, setFormDetail] = useState(form);

    useEffect(() => {
        if (!canEdit && form !== formDetail) {
            setFormDetail(form);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit])

    const setForm = (key: string, value: any) => {
        setFormDetail((oldValue: any) => ({ ...oldValue, [key]: value }));
    }

    return (
        <div className={classes.formDetailsWrapper}>
            <div className={classes.formDetailTitle}>Personal Information</div>
            {
                canEdit &&
                <>
                    <div className={classes.formDetailFormTitle}>Name</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'name'}
                        formValue={formDetail.name}
                        setValue={setForm}
                        type={'text'}
                        label={formDetail.name}
                    />
                </>
            }

            <div className={classes.formDetailFormTitle}>Email</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'email'}
                formValue={formDetail.email}
                setValue={setForm}
                type={'email'}
                label={formDetail.email}
            />

            <div className={classes.formDetailFormTitle}>Phone Number</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'phone'}
                formValue={formDetail.phone}
                setValue={setForm}
                type={'tel'}
                label={formDetail.phone}
            />

            <hr />

            <div className={classes.formDetailFormTitle}>Graduation Year</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'gradYear'}
                formValue={formDetail.gradYear}
                setValue={setForm}
                type={'text'}
                label={formDetail.gradYear}
            />

            <div className={classes.formDetailFormTitle}>GPA</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'gpa'}
                formValue={formDetail.gpa}
                setValue={setForm}
                type={'text'}
                label={formDetail.gpa}
            />

            <div className={classes.formDetailFormTitle}>ACT/SAT Score</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'actSatScore'}
                formValue={formDetail.actSatScore}
                setValue={setForm}
                type={'text'}
                label={formDetail.actSatScore}
            />

            <div className={classes.formDetailFormTitle}>First Generation</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'firstGen'}
                formValue={formDetail.firstGen}
                setValue={setForm}
                type={'text'}
                label={formDetail.firstGen}
            />

            <div className={classes.formDetailFormTitle}>Academic Disruption</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'academicDisruption'}
                formValue={formDetail.academicDisruption}
                setValue={setForm}
                type={'text'}
                label={formDetail.academicDisruption}
            />

            <div className={classes.formDetailFormTitle}>Upward Trajectory</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'upwardTrajectory'}
                formValue={formDetail.upwardTrajectory}
                setValue={setForm}
                type={'text'}
                label={formDetail.upwardTrajectory}
            />

            <div className={classes.formDetailFormTitle}>Family Income Range</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'familyIncome'}
                formValue={formDetail.familyIncome}
                setValue={setForm}
                type={'select'}
                label={FAMILY_INCOME_RANGE[formDetail.familyIncome - 1].text}
            />

            <div className={classes.formDetailFormTitle}>Activity</div>
            <DisplayLabelInput
                canEdit={canEdit}
                formKey={'activity'}
                formValue={formDetail.activity}
                setValue={setForm}
                type={'textfield'}
                label={formDetail.activity}
            />

        </div>
    );
}