import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';
import useHelper from "../helpers/helper.store";
import useCollegeStore from "../college/college.store";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../utils";
import Alert from "../../components/utilities/Alert";

type Auth = {
    displayName?: string;
    auth: any;
    phoneNumber?: string;
    photoURL?: string;
    metadata?: any;
    email: string;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    uid: string;
}

type AuthState = {
    auth: Auth | null;
    token: string;
}

type Actions = {
    login: (credentials: any) => any,
    logout: () => any,
    reset: () => any,
    registerUser: (form: any) => any
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
            login: async ({ email, password }: any) => {
                const setLoader = useHelper.getState().setLoader;
                setLoader(true);

                await signInWithEmailAndPassword(auth, email, password).then((credentials: any) => {
                    const user = credentials.user;
                    console.log(`[login] credentials`, user);
                    set((state) => ({ auth: user, token: user.accessToken }));
                    setLoader(false);
                }).catch((error: any) => { console.error(error) });

                setLoader(false);

            },
            registerUser: async ({ email, password }: any) => {
                const setLoader = useHelper.getState().setLoader;
                setLoader(true);

                await createUserWithEmailAndPassword(auth, email, password).then((credentials: any) => {
                    console.log(`[registerUser] credentials`, credentials);
                    const user = credentials.user;
                    set((state) => ({ auth: user, token: user.accessToken }));
                    setLoader(false);
                }).catch((error: any) => { console.error(error) });

            },
            logout: async () => {
                Alert.confirm('Are you sure you want to logout?').then(async ({ isConfirmed }: any) => {
                    if (isConfirmed) {
                        await signOut(auth).then(() => {
                            set(initialState);
                            const resetState = useCollegeStore.getState().reset;
                            resetState();
                        }).catch((error: any) => { console.error(error) })
                    }
                })
            },
            reset: () => {
                set(initialState);
            }
        })),
        storageOptions
    )
);

export default useAuthStore;