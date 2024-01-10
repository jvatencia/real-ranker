import { create } from "zustand";

interface Loader {
    showLoader: boolean;
    setLoader: (state: boolean) => any;
    showModal: boolean;
    setModalVisibility: (state: boolean) => any;
}

const useHelper = create<Loader>((set) => ({
    showLoader: false,
    showModal: false,
    setLoader: (state: boolean) => set(() => ({ showLoader: state })),
    setModalVisibility: (state: boolean) => set(() => ({ showModal: state }))
}));

export default useHelper;