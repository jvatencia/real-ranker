import { makeStyles } from "@mui/styles";
import { CustomFormControl } from "../../../components/styled";
import useCollegeStore from "../../../store/college/college.store";
import { Button, Chip, IconButton, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ACTIVITY_TYPE_LIST, DEFAULT_YES_NO_LIST, FAMILY_INCOME_RANGE, SELF_EVALUATION, showToast, FONT_FAMILY } from "../../../utils";
import { AccessTime, Add, Delete } from "@mui/icons-material";
import ActivityForm from "./ActivityForm";
import SearchCollegeModal from "../../../components/modals/SearchCollege";
import { useSearchParams } from "react-router-dom";
import Alert from "../../../components/utilities/Alert";

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
            fontFamily: FONT_FAMILY.DEFAULT,
            fontSize: '18px',
            margin: '24px 0 5px 0',
            [theme.breakpoints.up('md')]: {
                width: '400px',
                marginLeft: '20px'
            }
        },
        formDetailFormTitle: {
            fontSize: '16px',
            fontFamily: FONT_FAMILY.DEFAULT,
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
        activityTitleDesc: {
            color: theme.palette.secondary.light,
            fontSize: '12px'
        },
        activityItem: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 3px ' + theme.palette.primary.main,
            borderRadius: '5px',
            marginBottom: '10px'
        },
        activityTitle: {
            fontSize: '16px',
            fontWweight: 'bold',
        },
        activityChips: {
            padding: '0 5px',
            "& *": {
                marginRight: '5px'
            }
        },
        newActivityBtnWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: '15px'
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
        },
        collegeCardItem: {
            width: '100%',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 0px ' + theme.palette.primary.main,
            marginBottom: '10px',
            borderRadius: '5px',
            fontSize: '14px'
        },
        collegeCardContent: {
            fontFamily: FONT_FAMILY.DEFAULT
        },
        collegeCardActions: {

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
    options?: any[];
}

const ActivityItem = ({ activity, showDelete, deleteItem }: any) => {
    const classes = useStyles();
    return (
        <div className={classes.activityItem}>
            <div>
                <div className={classes.activityTitle}>{activity.name}</div>
                <div className={classes.activityTitleDesc}>
                    {activity.description}
                </div>
                <div className={classes.activityChips}>
                    <Chip size="small" label={ACTIVITY_TYPE_LIST.find((x) => x.value === activity.type)?.text} />
                    {
                        activity.isLeader &&
                        <Chip size="small" color="warning" label={'Leader'} />
                    }
                    <Chip onDelete={() => null} deleteIcon={<AccessTime fontSize="small" />} size="small" color="primary" label={`${activity.hours} hrs`} />
                </div>
            </div>
            {
                showDelete &&
                <div>
                    <IconButton aria-label="delete"
                        onClick={() => deleteItem(activity.id)}
                        size="small">
                        <Delete color="error" fontSize="inherit" />
                    </IconButton>
                </div>
            }
        </div>
    );
};

const DisplayListInput = ({ canEdit, label, formValue, formKey, setValue, type }: DisplayInputProps) => {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const deleteItem = (id: string) => {
        setValue('activity', formValue.filter((item: any) => item.id !== id));
        showToast('Activity deleted!');
    }

    return (
        <>
            {
                canEdit ?
                    <CustomFormControl>
                        {
                            label.map((item: any, index: number) => (
                                <ActivityItem
                                    activity={item}
                                    showDelete={true}
                                    deleteItem={deleteItem}
                                    key={`displayListInputItem${index}`}
                                />
                            ))
                        }
                        <div className={classes.newActivityBtnWrapper}>
                            {
                                formValue.length < 5 &&
                                <Button variant="outlined" startIcon={<Add />} onClick={() => setShowModal(true)}>
                                    New Activity
                                </Button>
                            }
                        </div>
                    </CustomFormControl> :
                    <div className={classes.formDetailFormValue}>
                        {
                            label.length === 0 ?
                                <div>
                                    (Empty)
                                </div> :
                                label.map((item: any, index: number) => (
                                    <ActivityItem
                                        activity={item}
                                        showDelete={false}
                                        key={`displayListInputItem${index}`}
                                    />
                                ))
                        }
                    </div>
            }
            <ActivityForm
                isOpen={showModal}
                setModal={setShowModal}
                activities={formValue}
                setActivities={setValue}
            />
        </>
    )
}


const DisplayLabelInput = ({ canEdit, label, formValue, formKey, setValue, type, options }: DisplayInputProps) => {
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
                                    options?.map((item, index) => (
                                        <MenuItem value={item.value} key={`${formKey}MenuItem${index}${item.value}`}>
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

const DisplaySchoolCard = ({ canEdit, college, removeCollege }: any) => {
    const classes = useStyles();

    return (
        <div className={classes.collegeCardItem}>
            <div className={classes.collegeCardContent}>
                {college.instnm}
            </div>
            <div className={classes.collegeCardActions}>
                <IconButton onClick={(e) => removeCollege(college)}>
                    <Delete color="error" />
                </IconButton>
            </div>
        </div>
    );
}

export default function FormDetails({ canEdit, formDetail, setFormDetail }: Readonly<FormDetailsProps>) {
    const classes = useStyles();
    const form = useCollegeStore((state) => state.form);
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const addCollege = useCollegeStore((state) => state.addCollege);
    const removeCollege = useCollegeStore((state) => state.removeCollege);
    const [showCollegeSearchModal, setShowCollegeSearchModal] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!canEdit && form !== formDetail) {
            setFormDetail(form);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canEdit]);

    useEffect(() => {
        const openSearch = searchParams.get('search') || '0';
        if (parseInt(openSearch) === 1) {
            setShowCollegeSearchModal(true);
        } else {
            setShowCollegeSearchModal(false);
        }

    }, [searchParams])



    useEffect(() => {
        console.log('[FormDetails] formDetail', formDetail);
    }, [formDetail])

    const setForm = (key: string, value: any) => {
        setFormDetail((oldValue: any) => ({ ...oldValue, [key]: value }));
    }

    const selectCollege = (college: any) => {
        const isExisting: boolean = !!selectedColleges.find((item: any) => item.id === college.id);
        if (!isExisting) {
            addCollege(college);
            showToast(`${college.instnm} was added!`, { variant: 'success' });
        } else {
            showToast('College already exists. Please select a new one', { variant: 'error' });
        }
    }

    const confirmRemove = (college: any) => {
        Alert.confirm(`Are you sure you want to remove ${college.instnm} from your list?`).then(({ isConfirmed }: any) => {
            if (isConfirmed) {
                removeCollege(college);
            }
        });
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
                <div className={classes.formDetailTitle}>Selected Colleges</div>
                <div className={classes.formDetail}>
                    {
                        selectedColleges.map((college, index) => (
                            <DisplaySchoolCard
                                key={`displaySchoolCard${index}${college.id}`}
                                removeCollege={confirmRemove}
                                college={college}
                                canEdit={canEdit}
                            />
                        ))
                    }
                    <div className={classes.newActivityBtnWrapper}>
                        {
                            selectedColleges.length < 10 &&
                            <Button variant="outlined" startIcon={<Add />} onClick={() => setSearchParams({ search: '1' })}>
                                Add College
                            </Button>
                        }
                    </div>
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
                        type={'number'}
                        label={formDetail.gradYear}
                    />

                    <div className={classes.formDetailFormTitle}>GPA</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'gpa'}
                        formValue={formDetail.gpa}
                        setValue={setForm}
                        type={'number'}
                        label={formDetail.gpa}
                    />

                    <div className={classes.formDetailFormTitle}>ACT/SAT Score</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'actSatScore'}
                        formValue={formDetail.actSatScore}
                        setValue={setForm}
                        type={'number'}
                        label={formDetail.actSatScore}
                    />

                    <div className={classes.formDetailFormTitle}>First Generation</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'firstGen'}
                        formValue={formDetail.firstGen}
                        setValue={setForm}
                        type={'select'}
                        options={DEFAULT_YES_NO_LIST}
                        label={DEFAULT_YES_NO_LIST[formDetail.firstGen].text}
                    />

                    <div className={classes.formDetailFormTitle}>Academic Disruption</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'academicDisruption'}
                        formValue={formDetail.academicDisruption}
                        setValue={setForm}
                        type={'select'}
                        options={DEFAULT_YES_NO_LIST}
                        label={DEFAULT_YES_NO_LIST[formDetail.academicDisruption].text}
                    />

                    <div className={classes.formDetailFormTitle}>Upward Trajectory</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'upwardTrajectory'}
                        formValue={formDetail.upwardTrajectory}
                        setValue={setForm}
                        type={'select'}
                        options={DEFAULT_YES_NO_LIST}
                        label={DEFAULT_YES_NO_LIST[formDetail.upwardTrajectory].text}
                    />

                    <div className={classes.formDetailFormTitle}>Family Obligations</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'familyObligation'}
                        formValue={formDetail.familyObligation}
                        setValue={setForm}
                        type={'select'}
                        options={DEFAULT_YES_NO_LIST}
                        label={DEFAULT_YES_NO_LIST[formDetail.familyObligation].text}
                    />

                    <div className={classes.formDetailFormTitle}>Evaluation</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'selfEvaluation'}
                        formValue={formDetail.selfEvaluation}
                        setValue={setForm}
                        type={'select'}
                        options={SELF_EVALUATION}
                        label={SELF_EVALUATION[formDetail.selfEvaluation].text}
                    />

                    <div className={classes.formDetailFormTitle}>Family Income Range</div>
                    <DisplayLabelInput
                        canEdit={canEdit}
                        formKey={'familyIncome'}
                        formValue={formDetail.familyIncome}
                        setValue={setForm}
                        type={'select'}
                        options={FAMILY_INCOME_RANGE}
                        label={FAMILY_INCOME_RANGE[formDetail.familyIncome - 1].text}
                    />

                    <div className={classes.formDetailFormTitle}>Activities</div>
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
            <SearchCollegeModal
                showDialog={showCollegeSearchModal}
                setDialog={(state: boolean) => setSearchParams({ search: state ? '1' : '0' })}
                setCollege={selectCollege}
            />
        </div>
    );
}