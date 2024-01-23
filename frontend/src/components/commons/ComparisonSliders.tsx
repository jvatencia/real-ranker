import { Swiper, SwiperSlide } from "swiper/react";
import ComparisonCard from "./ComparisonCard";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import { devices } from "../../utils/breakpoints";
import { useEffect, useReducer, useState } from "react";
import { ChangeCollegeModal } from "../modals/ChangeCollegeModa";
import useCollegeStore from "../../store/college/college.store";
import { useShallow } from 'zustand/react/shallow'

const useStyles = makeStyles((theme) => ({
    comparisonSlide: {
        width: "300px !important",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
}));

export default function ComparisonSliders({ colleges }: any) {
    const classes = useStyles();

    const isMobile = useMediaQuery(devices.mobileL);
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [dialogProps, setDialogProps] = useState({
        college1: null,
        college2: null,
        collegeIndex: null,
        trigger: null
    });

    const chunkedArray = useCollegeStore((state) => state.comparisonChunks);
    const setChunkedArray = useCollegeStore((state) => state.setComparisonChunks);

    useEffect(() => {
        processCollegeToChunks();
    }, []);

    useEffect(() => {
        console.log('[ComparisonSliders] chunkedArray', chunkedArray.map(({ college1, college2 }: any) => ({ college1: college1.instnm, college2: college2.instnm })));

    }, [chunkedArray]);

    const processCollegeToChunks = (chunkSize = 2) => {
        const chunks: any = [];

        for (let i = 0; i < colleges.length; i += chunkSize) {
            const [col1, col2] = colleges.slice(i, i + chunkSize);

            chunks.push({
                college1: col1,
                college2: col2
            });
        }

        setChunkedArray(chunks);
    }

    const handleClose = (newCollege: any, { college1: col1, college2: col2, index, trigger }: any) => {
        console.log('handleClose', {
            newCollege: newCollege.instnm,
            col1: col1.instnm,
            col2: col2.instnm,
            index
        });

        const newChunk = chunkedArray.map(({ college1, college2 }: any, i: number) => {
            if (index === i) {
                return trigger === 'college2' ? { college1, college2: newCollege } : { college1: newCollege, college2 };
            } else {
                return { college1, college2 };
            }
        });

        setChunkedArray(newChunk);


        setShowChangeModal(false);


    }

    const handleOpenModal = (props: any) => {
        setDialogProps(props);
        setShowChangeModal(true);
    }

    return (
        <>
            <div style={{ marginTop: "20px", padding: "20px 0" }}>
                <Swiper spaceBetween={20} slidesPerView={isMobile ? 1 : 1.8}>
                    {
                        chunkedArray.map(({ college1, college2 }: any, index: number) => (
                            <SwiperSlide key={`swiperSlideComparisonSlider${index}${college1.instnm.replace(/ /g, '')}${college2.instnm.replace(/ /g, '')}`}>
                                <ComparisonCard
                                    index={index}
                                    college1={college1}
                                    college2={college2}
                                    openModal={(trigger: string) => handleOpenModal({ college1, college2, collegeIndex: index, trigger })}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <ChangeCollegeModal
                handleClose={handleClose}
                showDialog={showChangeModal}
                {...dialogProps}
            />
        </>
    );
}
