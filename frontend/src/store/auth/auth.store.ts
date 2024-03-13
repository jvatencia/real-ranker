import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';
import useHelper from "../helpers/helper.store";
import useCollegeStore from "../college/college.store";

type AuthState = {
    auth: any;
    token: string;
}

type Actions = {
    login: (credentials: any) => any,
    logout: () => any,
    reset: (() => any),
}

const persistStorage: StateStorage = localStorage

const storageOptions = {
    name: 'auth.store',
    storage: createJSONStorage(() => persistStorage)
}

const initialState = {
    auth: null,
    token: '',
}

const useAuthStore = create<AuthState & Actions>()(
    persist(
        immer((set) => ({
            ...initialState,
            login: async (credentials: any) => {
                const setLoader = useHelper.getState().setLoader;
                setLoader(true);
                // const response = await authenticate(credentials);
                // console.log(response);

                set((state) => ({ token: '123124124124', auth: { email: 'someone@thetestguy.com', name: 'The Test Guy' } }));
                setLoader(false);

            },
            logout: () => {
                set(initialState);
                const resetState = useCollegeStore.getState().reset;
                resetState();
            },
            reset: () => {
                set(initialState);
            }
        })),
        storageOptions
    )
);

export default useAuthStore;