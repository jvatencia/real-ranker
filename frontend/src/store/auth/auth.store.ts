import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';
import { authenticate } from "../../api/auth.api";
import useHelper from "../helpers/helper.store";

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
                const response = await authenticate(credentials);
                console.log(response);
                setLoader(false);
            },
            logout: () => { },
            reset: () => {
                set(initialState);
            }
        })),
        storageOptions
    )
);

export default useAuthStore;