import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { sizes } from "../../utils";
import { useState } from "react";


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

interface SearchCollegeModalProps {
    showDialog: boolean;
    currentCollege?: any;
    setCollege: any;
}
export default function SearchCollegeModal({ showDialog, currentCollege, setCollege }: SearchCollegeModalProps) {
    const classes = useStyles();
    const [selectedCollege, setSelectedCollege] = useState(currentCollege || null);
    const onClose = () => {

    }

    const confirmSelection = () => {
        setCollege(selectedCollege);
    }


    return (
        <Dialog
            maxWidth={"lg"}
            open={showDialog}
            onClose={onClose}
            aria-labelledby="max-width-dialog-title"

        >
            <DialogTitle>
                Search College
            </DialogTitle>
            <DialogContent className={classes.modalBody}>
            </DialogContent>
            <DialogActions>
                <Button onClick={confirmSelection} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>

    )
}