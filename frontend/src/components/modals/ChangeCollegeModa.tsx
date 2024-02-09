import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { CommonModalProps } from "../../utils/interfaces";
import useCollegeStore from "../../store/college/college.store";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import CustomFormControl from "../styled/CustomFormControl";
import type { DialogProps } from "@mui/material";
import { sizes } from "../../utils";

const useStyles = makeStyles(
    (theme: any) => ({
        modalBody: {
            width: '500px',
            padding: ' 24px 20px',
            [theme.breakpoints.down('md')]: {
                width: sizes.mobileS
            }
        }
    })
)
interface ChangeCollegeCardProps extends CommonModalProps {
    college1: any;
    college2: any;
    trigger?: any;
    collegeIndex?: any;
    handleClose: (college: any, chunkedColleges: any) => any;
}

export const ChangeCollegeModal: React.FC<ChangeCollegeCardProps> = props => {
    const classes = useStyles();
    const {
        college1,
        college2,
        collegeIndex,
        trigger,
        handleClose,
        showDialog,
    } = props;

    const [modalCollege, setModalCollege] = useState<any>(null);

    const selectedColleges = useCollegeStore((state) => state.selectedColleges);

    const handleChange = (event: any) => {
        const newCollege: any = selectedColleges.find(col => col.instnm === event.target.value);
        console.log("handleChange", newCollege.instnm);
        setModalCollege(newCollege);

    };

    const handleModalClose: DialogProps["onClose"] = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
    }

    const confirmCollege = () => {
        handleClose(modalCollege, trigger);
    }

    useEffect(() => {
        if (trigger === 'college2')
            setModalCollege(college2);
        else
            setModalCollege(college1);

    }, [college2, college1, trigger]);


    return (
        <Dialog
            maxWidth={"lg"}
            open={showDialog}
            onClose={handleModalClose}
            aria-labelledby="max-width-dialog-title"

        >
            <DialogTitle>
                Change College
            </DialogTitle>
            <DialogContent className={classes.modalBody}>
                {
                    modalCollege &&
                    <CustomFormControl style={{ padding: 10 }}>
                        <TextField select label="Select College"
                            name="familyIncome"
                            onChange={handleChange}
                            value={modalCollege?.instnm}
                        >
                            {selectedColleges.map((col, index) => (
                                <MenuItem
                                    value={col.instnm}
                                    key={`inputMenuItem${index}${col.instnm.replace(/ /g, "")}`}
                                >
                                    {col.instnm}
                                </MenuItem>
                            ))}
                        </TextField>
                    </CustomFormControl>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={confirmCollege} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
