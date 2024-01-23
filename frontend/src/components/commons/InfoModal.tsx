import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { devices } from "../../utils/breakpoints";

const useStyles = makeStyles(
    (theme) => ({
        youtubeIframe: {
            height: '70vh',
            width: '100%',
        },
        dialogContent: {
            overflow: 'hidden'
        }
    })
);

interface InfoModalProps {
    showDialog: boolean;
    setShowDialog: (status: boolean) => void;
    title: string;
    description: string;
}

function InfoModal({ showDialog, setShowDialog, title, description }: InfoModalProps) {

    const handleClose = () => {
        setShowDialog(false);
    };
    const matches = useMediaQuery(devices.mobileM);
    const classes = useStyles();

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            fullScreen={matches}
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {description}
                <iframe src="https://www.tiktok.com/embed/7325527158502346026" frameBorder="0" title="collegeAdmissionsTiktokVid" className={classes.youtubeIframe}></iframe>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default InfoModal;