import { create } from "zustand";

interface Loader {
    showLoader: boolean,
    setLoader: (state: boolean) => any;
}

const useHelper = create<Loader>((set) => ({
    showLoader: false,
    setLoader: (state: boolean) => set(() => ({ showLoader: state })),
}));

export default useHelper;