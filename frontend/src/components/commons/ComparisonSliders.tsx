import ComparisonCard from "./ComparisonCard";
import { useEffect, useState } from "react";
import { ChangeCollegeModal } from "../modals/ChangeCollegeModa";


export default function ComparisonSliders({ colleges }: any) {
    const [college1, setCollege1] = useState(colleges[0]);
    const [college2, setCollege2] = useState(colleges[1]);
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [dialogProps, setDialogProps] = useState({
        college1: null,
        college2: null,
        collegeIndex: null,
        trigger: null
    });


    useEffect(() => {
    }, []);

    const handleClose = (newCollege: any, trigger: string) => {
        console.log('[handleClose] newCollege', newCollege.instnm)
        console.log('[handleClose] trigger', trigger)
        if (trigger === 'college1') {
            setCollege1(newCollege);
        } else {
            setCollege2(newCollege);

        }


        setShowChangeModal(false);


    }

    const handleOpenModal = (props: any) => {
        setDialogProps(props);
        setShowChangeModal(true);
    }

    return (
        <>
            <div style={{ marginTop: "20px", padding: "20px 0" }}>
                <ComparisonCard
                    college1={college1}
                    college2={college2}
                    openModal={(trigger: string) => handleOpenModal({ college1, college2, trigger })}
                />
            </div>

            <ChangeCollegeModal
                handleModalClose={handleClose}
                handleClose={handleClose}
                showDialog={showChangeModal}
                {...dialogProps}
            />
        </>
    );
}
