import CommonModal from "../../../components/modals/CommonModal";
import { FormLabel, OutlinedInput, TextField, FormControlLabel, Checkbox, MenuItem } from "@mui/material";
import { CustomFormControl } from "../../../components/styled";
import { ACTIVITY_TYPE_LIST, generateId, showToast } from "../../../utils";
import { useState } from "react";
import { ModalButtonProps } from "../../../utils/interfaces";

interface ActivityFormProps {
    isOpen: boolean;
    setModal: any;
    activities: any[];
    setActivities: any;
}
export default function ActivityForm({ isOpen, setModal, activities, setActivities }: Readonly<ActivityFormProps>) {

    const resetForm = () => {
        setActivityInput({
            name: '',
            hours: '',
            type: 'sports',
            description: '',
            isLeader: false
        });
    }

    const addItem = () => {
        if (activities.length < 5) {
            const newItem = { ...activityInput, id: generateId(10) };
            setActivities('activity', [...activities, newItem]);
            resetForm();
            showToast('New activity added');
            setModal(false);
        }
    };

    const actions: ModalButtonProps[] = [
        {
            title: 'Save',
            variant: 'contained',
            handler: addItem
        },
        {
            title: 'Cancel',
            color: 'error',
            handler: () => setModal(false)
        }
    ];

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




    return (
        <CommonModal
            title={'New Activity'}
            showDialog={isOpen}
            actions={actions}
            handleModalClose={resetForm}
        >
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
        </CommonModal>
    );
}