import { ButtonOwnProps } from "@mui/material";

export interface ModalButtonProps extends ButtonOwnProps {
    title: string;
    handler: any;
}

export interface CommonModalProps {
    title?: string;
    children?: any;
    showDialog: boolean;
    handleModalClose?: any;
    setShowDialog?: (showDialog: boolean) => any;
    handleClose?: any;
    actions?: ModalButtonProps[];
}