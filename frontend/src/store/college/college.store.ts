import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getUniversities } from "../../api/university.api";

type CollegeState = {
    colleges: any[];
    selectedColleges: any[];
    userScore: any;
}

type Actions = {
    fetchUniversities: () => any;
    addCollege: (college: any) => any;
    setSelectedCollege: (colleges: any[]) => any;
    removeCollege: (college: any) => any;
    reset: () => void;
}

const initialState: CollegeState = {
    colleges: [],
    selectedColleges: [],
    userScore: {
        success: 0,
        value: 0,
        cost: 0,
        outcomes: 0,
        diversity: 0
    },
}

const useCollegeStore = create<CollegeState & Actions>()(
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
        reset: () => {
            set(initialState);
        }
    }))
)

export default useCollegeStore;