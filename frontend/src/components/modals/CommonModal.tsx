import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { sizes } from "../../utils";
import { CommonModalProps } from "../../utils/interfaces";

const useStyles = makeStyles(
    (theme) => ({
        modalBody: {
            width: '500px',
            padding: ' 24px 20px',
            [theme.breakpoints.down('md')]: {
                width: sizes.mobileS
            }
        }
    })
);

export default function CommonModal({ title, children, showDialog, handleModalClose, actions }: CommonModalProps) {
    const classes = useStyles();

    return (
        <Dialog
            maxWidth={"lg"}
            open={showDialog}
            onClose={handleModalClose}
            aria-labelledby="max-width-dialog-title"

        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent className={classes.modalBody}>
                {children ?? <></>}
            </DialogContent>
            <DialogActions>
                {
                    actions?.map((button, index) => (
                        <Button onClick={button.handler} color={button.color || 'primary'} key={`commonModalActionBtn${index}`}>
                            {button.title}
                        </Button>
                    ))
                }
            </DialogActions>
        </Dialog>
    );
}