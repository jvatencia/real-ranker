import { MutableRefObject } from "react"

export type CustomModalRef = {
    show: () => void,
    hide: () => void
}

export default class ModalController {
    static modalRef: MutableRefObject<CustomModalRef>;

    static setModalRef = (ref: any) => {
        this.modalRef = ref;
    }

    static showModal = () => {
        this.modalRef.current?.show();
    }

    static hideModal = () => {
        this.modalRef.current?.hide();
    }
}