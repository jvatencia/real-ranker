import { MutableRefObject, ReactNode } from "react"

export type CustomModalRef = {
    show: (options?: any) => void,
    hide: () => void
}

type CustomModalButtonOptions = {
    text: string,
    role?: string,
    handler?: () => null
}

export type CustomModalOptions = {
    type: 'default' | 'fullscreen' | 'alert',
    header?: string | ReactNode,
    buttons?: CustomModalButtonOptions[],
    content?: ReactNode,

}

export default class ModalController {
    static modalRef: MutableRefObject<CustomModalRef>;

    static setModalRef = (ref: any) => {
        this.modalRef = ref;
    }

    static showModal = (options: CustomModalOptions) => {
        this.modalRef.current?.show(options);
    }

    static hideModal = () => {
        this.modalRef.current?.hide();
    }
}