import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef } from "react";
import { SwiperRef, SwiperSlide, Swiper, } from "swiper/react";
import { devices, FONT_FAMILY } from "../../../utils";
import { MOCK_TIMELINE } from "../../../utils/mocks";

const useStyles = makeStyles(
    (theme) => ({
        calendarTitle: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 'bold',
            color: theme.palette.primary.main
        },
        calendarSwiper: {
            width: '100%'
        },
        timelineSlide: {
            marginRight: '0 !important'
        },
        timelineItem: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px'
        },
        timelineLabel: {
            position: 'absolute',
            fontFamily: FONT_FAMILY.DEFAULT,
            fontSize: '16px',
            bottom: '25px',
            left: '40px',
            [theme.breakpoints.up('md')]: {
                bottom: '25px',
                left: '20px'
            }
        },
        timelineWrapper: {
            height: '10px',
            width: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'flex-start',
            bottom: '60px'
        },
        timelineHorizontal: {
            border: '2px solid ' + theme.palette.primary.main,
            width: '100%',
        },
        timelineVertical: {
            border: '1px solid ' + theme.palette.secondary.main,
            borderRadius: '50%',
            backgroundColor: theme.palette.secondary.main,
            width: '40px',
            height: '40px',
            position: 'absolute',
            bottom: '50px',
            left: '40px'
        },
        timelineContentWrapper: {
            position: 'absolute',
            top: '20px',
            left: '70px',
            height: '150px',
            width: 'calc(100% - 100px)',
        },
        timelineContent: {
            width: '100%',
            height: '100%',
            border: '1px solid rgba(0,0,0,0.3)',
            backgroundColor: theme.palette.light.light,
            position: 'relative',
            borderRadius: '15px',
            "&::before": {
                content: "Test ",
                height: '40px',
                width: '40px',
                backgroundColor: 'red'
            }
        }
    })
);

export default function Calendar() {
    const classes = useStyles();
    const swiperRef = useRef<SwiperRef>(null);
    const matches = useMediaQuery(devices.mobileL);
    const timeline = MOCK_TIMELINE;

    const slideChanged = (event: any) => {
        console.log(event);
    };

    return (
        <div>
            <div className={classes.calendarTitle}>Calendar</div>
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={matches ? 1 : 2}
                onSlideChange={slideChanged}
                watchSlidesProgress={true}
                className={classes.calendarSwiper}
            >
                {
                    timeline.map((timeline, index: number) => (
                        <SwiperSlide key={`swiperSlideTimelineItem${index}`} className={classes.timelineSlide}>
                            <div className={classes.timelineItem}>
                                <div className={classes.timelineLabel}>{timeline.label}</div>
                                <div className={classes.timelineWrapper}>
                                    <div className={classes.timelineHorizontal}></div>
                                </div>
                                <div className={classes.timelineVertical}></div>
                                <div className={classes.timelineContentWrapper}>
                                    <div className={classes.timelineContent}>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}