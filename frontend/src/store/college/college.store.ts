import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getUniversities } from "../../api/university.api";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";

type CollegeState = {
    colleges: any[];
    selectedColleges: any[];
    userScore: any;
    form: any;
    comparisonChunks: any[];
}

type Actions = {
    fetchUniversities: () => any;
    addCollege: (college: any) => any;
    setSelectedCollege: (colleges: any[]) => any;
    removeCollege: (college: any) => any;
    setForm: (form: any) => any;
    reset: () => void;
    updateUserScores: (score: any) => void;
    setComparisonChunks: (arr: any[]) => void;
}

const persistStorage: StateStorage = localStorage;

const storageOptions = {
    name: 'colleges.store',
    storage: createJSONStorage(() => persistStorage),
    partialize: (state: CollegeState & Actions) => ({
        // selectedColleges: state.selectedColleges,
        userScore: state.userScore,
        form: state.form,
        selectedColleges: state.selectedColleges
    })

}


const initialState: CollegeState = {
    colleges: [],
    selectedColleges: [],
    userScore: {
        success: 20,
        value: 20,
        cost: 20,
        outcomes: 20,
        diversity: 20
    },
    form: {},
    comparisonChunks: []
}

const useCollegeStore = create<CollegeState & Actions>()(
    persist(
        immer((set) => ({
            ...initialState,
            fetchUniversities: async () => {
                const response = await getUniversities();

                if (response) {
                    console.log('[fetchUniversities] response', response);
                    return set(() => ({ colleges: response }));
                }
            },
            addCollege: (college: any) => {
                return set((state) => ({ selectedColleges: [...state.selectedColleges, college] }));
            },
            removeCollege: (college: any) => {
                return set((state) => ({ selectedColleges: [...state.colleges.map((col) => col.instnm !== college.instnm)] }));
            },
            setSelectedCollege: (colleges: any[]) => {
                return set((state) => ({ selectedColleges: colleges }));
            },
            setForm: (form: any) => set((state) => ({ form: { ...state.form, ...form } })),
            reset: () => {
                set(initialState);
            },
            updateUserScores: (score: any) => set((state) => ({ userScore: { ...state.userScore, ...score } })),
            setComparisonChunks: (arr: any[]) => set((state) => ({ comparisonChunks: arr }))
        })),
        storageOptions
    )

)

export default useCollegeStore;