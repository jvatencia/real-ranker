import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react"
import { CustomModalRef } from "../../utils";
import ModalController from "../../utils/modal";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import useHelper from "../../store/helpers/helper.store";

function CustomModal() {
    const modalVisible = useHelper((state) => state.showModal);
    const setModalVisible = useHelper((state) => state.setModalVisibility);
    const modalRef = useRef<CustomModalRef>();

    useLayoutEffect(() => {
        ModalController.setModalRef(modalRef)
    }, []);

    useImperativeHandle(
        modalRef,
        () => ({
            show: () => setModalVisible(true),
            hide: () => setModalVisible(false),
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            fullScreen={false}
            open={modalVisible}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle></DialogTitle>
            <DialogContent >

            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => ModalController.hideModal()}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default forwardRef(CustomModal);