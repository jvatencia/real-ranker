import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { devices } from "../../../utils";
import { MOCK_WHATS_NEW_VIDEOS } from "../../../utils/mocks";
import { makeStyles } from "@mui/styles";
import Calendar from "./Calendar";
import ChanceGraph from "../../../components/charts/ChanceGraph";
import useCollegeStore from "../../../store/college/college.store";

const useStyles = makeStyles(
    (theme) => ({
        videoSwiper: {
            width: '100%',
            margin: '20px 0'
        },
        videoItem: {
            width: '100%',
            height: '200px',
            border: '1px solid rgba(0,0,0,0.3)',
            borderRadius: '15px',
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
            [theme.breakpoints.up('md')]: {
                height: '250px'
            }
        },
        sectionTitle: {
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            color: theme.palette.primary.main
        }
    })
)

export default function WhatsNew() {
    const classes = useStyles();
    const swiperRef = useRef<SwiperRef>(null);
    const matches = useMediaQuery(devices.mobileL);
    const videoItems = MOCK_WHATS_NEW_VIDEOS;
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const slideChanged = (event: any) => {
        console.log(event);
    };

    return (
        <div>
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={matches ? 3.25 : 5}
                onSlideChange={slideChanged}
                watchSlidesProgress={true}
                className={classes.videoSwiper}
            >
                {
                    videoItems.map((item: any, index: number) => (
                        <SwiperSlide key={`swiperWhatsNewVideoItemSlide${index}`}>
                            <div className={classes.videoItem}>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <hr />
            <div className={classes.sectionTitle}>Graph</div>
            <ChanceGraph data={selectedColleges} />
            <hr />
            <Calendar />
        </div>
    );
}