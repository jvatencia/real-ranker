import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FilterSlider from "./FilterSlider";

const useStyles = makeStyles(
    (theme) => ({
        dialogContent: {
            overflow: 'hidden',
            padding: '20px 24px'
        }
    })
);

interface CategorySliderModalProps {
    showDialog: boolean;
    handleClose: () => void;
}

export default function CategorySliderModal({ showDialog, handleClose }: Readonly<CategorySliderModalProps>) {
    const classes = useStyles();

    return (
        <Dialog
            maxWidth={'sm'}
            fullWidth
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>Category Sliders</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <FilterSlider />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}