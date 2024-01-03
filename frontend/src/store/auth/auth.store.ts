import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';

type AuthState = {
    auth: any;
    token: string;
}

type Actions = {
    login: (credentials: any) => void,
    logout: () => void,
    reset: (() => void),
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
            login: () => { },
            logout: () => { },
            reset: () => {
                set(initialState);
            }
        })),
        storageOptions
    )
);

export default useAuthStore;