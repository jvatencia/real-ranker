import { makeStyles } from "@mui/styles";
import { CustomFormControl } from "../../../components/styled";
import useCollegeStore from "../../../store/college/college.store";
import { Button, Checkbox, Chip, FormControlLabel, FormLabel, IconButton, InputAdornment, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ACTIVITY_TYPE_LIST, FAMILY_INCOME_RANGE, generateId } from "../../../utils";
import { AddCircle, Delete } from "@mui/icons-material";

const useStyles = makeStyles(
    (theme) => ({
        formDetailsWrapper: {
            padding: '16px 10px',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
                justifyContent: 'space-between'
            }
        },
        formDetailTitle: {
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            fontSize: '18px',
            margin: '24px 0 5px 0',
            [theme.breakpoints.up('md')]: {
                width: '400px',
                marginLeft: '20px'
            }
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
        },
        formDetailFormListValue: {
            fontSize: '14px',
            color: theme.palette.primary.main,
        },
        formDetailFormDesc: {
            color: theme.palette.light.dark,
            fontSize: '12px'
        },
        activityItem: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            '&:not(:first-child)': {
                borderTop: '1px solid rgba(0,0,0,0.1)'
            }
        },
        activityForm: {
            padding: '10px 16px',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 3px ' + theme.palette.primary.main,
            marginTop: '20px'
        },
        activityFormTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            marginBottom: '10px'
        },
        activityFormActions: {
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end'
        },
        formDetailsGroup: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                padding: '10px',
                width: '50%',
                "&:first-child": {
                    borderRight: '1px solid rgba(0,0,0,0.1)'
                }
            }
        },
        formDetail: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '400px',
                marginLeft: '20px'
            }
        }
    })
)

interface FormDetailsProps {
    canEdit: boolean;
    formDetail?: any;
    setFormDetail?: any;
}


interface DisplayInputProps extends FormDetailsProps {
    label?: any;
    formValue: any;
    formKey: string;
    setValue: any;
    type?: string
}

const DisplayListInput = ({ canEdit, label, formValue, formKey, setValue, type }: DisplayInputProps) => {
    const classes = useStyles();
    const [activityInput, setActivityInput] = useState<any>({
        name: '',
        hours: '',
        type: 'sports',
        description: '',
        isLeader: false
    });

    const updateInput = (value: any, field: 'name' | 'hours' | 'type' | 'description' | 'isLeader') => {
        console.log('[updateInput] value', value);
        setActivityInput((oldValue: any) => ({ ...oldValue, [field]: value }));
    }

    useEffect(() => {
        console.log('[DisplayListInput] formValue', formValue);
    }, [formValue])

    const addItem = () => {
        if (formValue.length < 5) {
            const newItem = { ...activityInput, id: generateId(10) };
            setValue('activity', [...formValue, newItem]);
            setActivityInput({
                name: '',
                hours: '',
                type: 'sports',
                description: '',
                isLeader: false
            });
        }
    };

    const deleteItem = (id: string) => {
        setValue('activity', formValue.filter((item: any) => item.id !== id));
    }

    return (
        <>
            {
                canEdit ?
                    <CustomFormControl>
                        {
                            label.map((item: any, index: number) => (
                                <div key={`displayListInputItem${index}`} className={classes.activityItem}>
                                    <div>
                                        <div>{item.name} | {item.hours} hrs</div>
                                        <div>
                                            <Chip size="small" label={ACTIVITY_TYPE_LIST.find((x) => x.value === item.type)?.text} />
                                            {
                                                item.isLeader &&
                                                <Chip size="small" color="warning" label={'Leader'} />
                                            }
                                        </div>
                                        <div className={classes.formDetailFormDesc}>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton aria-label="delete"
                                            onClick={() => deleteItem(item.id)}
                                            size="small">
                                            <Delete color="error" fontSize="inherit" />
                                        </IconButton>
                                    </div>
                                </div>
                            ))
                        }
                        <div className={classes.activityForm}>
                            <div className={classes.activityFormTitle}>New Activity</div>
                            <CustomFormControl>
                                <FormLabel>Name</FormLabel>
                                <OutlinedInput
                                    size="small"
                                    placeholder="Enter activity name"
                                    type="text"
                                    onChange={(e) => updateInput(e.target.value, 'name')}
                                    value={activityInput.name}
                                />
                            </CustomFormControl>
                            <CustomFormControl>
                                <FormLabel>Hours</FormLabel>
                                <OutlinedInput
                                    size="small"
                                    placeholder="Enter activity hours"
                                    type="number"
                                    onChange={(e) => updateInput(e.target.value, 'hours')}
                                    value={activityInput.hours}
                                />
                            </CustomFormControl>
                            <CustomFormControl>
                                <FormLabel>Type</FormLabel>
                                <TextField select
                                    size="small"
                                    value={activityInput.type}
                                    onChange={(e) => updateInput(e.target.value, 'type')}>
                                    {
                                        ACTIVITY_TYPE_LIST.map((item, index) => (
                                            <MenuItem value={item.value} key={`activityListMenuItem${index}${item.value}`}>
                                                {item.text}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </CustomFormControl>
                            <CustomFormControl>
                                <FormLabel>Description</FormLabel>
                                <OutlinedInput
                                    size="small"
                                    placeholder="Enter activity description"
                                    type="text"
                                    multiline
                                    rows={4}
                                    onChange={(e) => updateInput(e.target.value, 'description')}
                                    value={activityInput.description}
                                />
                            </CustomFormControl>
                            <CustomFormControl>
                                <FormControlLabel
                                    control={<Checkbox onChange={(e) => updateInput(e.target.checked, 'isLeader')} />}
                                    label="Leader" />
                            </CustomFormControl>
                            <div className={classes.activityFormActions}>
                                <Button variant="contained" size="small" onClick={addItem} endIcon={<AddCircle />}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </CustomFormControl> :
                    <div className={classes.formDetailFormValue}>
                        {
                            label.map((item: any, index: number) => (
                                <div
                                    className={classes.formDetailFormListValue}
                                    key={`displayListInputLabel${index}`}>
                                    <div>{item.name} | {item.hours} hrs</div>
                                    <div>
                                        <Chip size="small" label={ACTIVITY_TYPE_LIST.find((x) => x.value === item.type)?.text} />
                                        {
                                            item.isLeader &&
                                            <Chip size="small" color="warning" label={'Leader'} />
                                        }
                                    </div>
                                    <div className={classes.formDetailFormDesc}>
                                        {item.description}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </>
    )
}


const DisplayLabelInput = ({ canEdit, label, formValue, formKey, setValue, type }: DisplayInputProps) => {
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

export default function FormDetails({ canEdit, formDetail, setFormDetail }: Readonly<FormDetailsProps>) {
    const classes = useStyles();
    const form = useCollegeStore((state) => state.form);

    useEffect(() => {
        if (!canEdit && form !== formDetail) {
            setFormDetail(form);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit]);

    useEffect(() => {
        console.log('[FormDetails] formDetail', formDetail);
    }, [formDetail])

    const setForm = (key: string, value: any) => {
        setFormDetail((oldValue: any) => ({ ...oldValue, [key]: value }));
    }

    return (
        <div className={classes.formDetailsWrapper}>
            <div className={classes.formDetailsGroup}>
                <div className={classes.formDetailTitle}>Personal Information</div>
                <div className={classes.formDetail}>
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



                </div>
            </div>
            <div className={classes.formDetailsGroup}>
                <div className={classes.formDetailTitle}>Other Information</div>
                <div className={classes.formDetail}>
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
                    <DisplayListInput
                        canEdit={canEdit}
                        formKey={'activity'}
                        formValue={formDetail.activity}
                        setValue={setForm}
                        type={'textfield'}
                        label={formDetail.activity}
                    />
                </div>
            </div>

        </div>
    );
}