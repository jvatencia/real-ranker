import CollegeCard from "../../../components/commons/CollegeCard";
import useCollegeStore from "../../../store/college/college.store"

export default function ResultTabContent() {
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    return (
        <div>
            {
                selectedColleges.map((college, index: number) => (
                    <CollegeCard college={college} key={`collegeCardComp${index}`} />
                ))
            }
        </div>
    )
}