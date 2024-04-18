import { useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { ASSET_URL, devices, FONT_FAMILY } from "../../../utils";
import { MOCK_WHATS_NEW_VIDEOS } from "../../../utils/mocks";
import { makeStyles } from "@mui/styles";
import Calendar from "./Calendar";
import useCollegeStore from "../../../store/college/college.store";
import ChanceGraphVertical from "../../../components/charts/ChanceGraphVertical";
import { VideoModal } from "../../../components/modals/VideoModal";

const useStyles = makeStyles(
    (theme) => ({
        videoSwiper: {
            width: '100%',
            margin: '20px 0'
        },
        videoItem: {
            width: '100%',
            height: '200px',
            boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
            borderRadius: '5px',
            overflow: 'hidden',
            background: `linear-gradient(180deg, ${theme.palette.dark.main} 0%, ${theme.palette.dark.dark} 50%, ${theme.palette.dark.light} 100%)`,
            cursor: 'pointer',
            [theme.breakpoints.up('md')]: {
                height: '300px'
            }
        },
        sectionTitle: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 'bold',
            color: theme.palette.dark.main
        },
        sectionCenteredContent: {
            width: '100%',
        },
        videoPlayer: {
            height: '100%',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                objectFit: 'cover'
            }
        }
    })
)

export default function WhatsNew() {
    const classes = useStyles();
    const swiperRef = useRef<SwiperRef>(null);
    const matches = useMediaQuery(devices.mobileL);
    const videoItems = MOCK_WHATS_NEW_VIDEOS;
    const selectedColleges = useCollegeStore((state) => state.selectedColleges);
    const [videoModal, setVideoModal] = useState(false);
    const [videoIndex, setVideoIndex] = useState<number | null>(null);
    const slideChanged = (event: any) => {
        setVideoIndex(event.activeIndex);
        pauseVideo(event.previousIndex);
    };

    const openVideoModal = (index: number) => {
        setVideoIndex(index);
        setVideoModal(true);
    }

    const pauseOtherVideos = (index: number) => {
        return new Promise((resolve) => {
            resolve(videoItems.filter((item, i) => index !== i).map((item, i) => pauseVideo(index)));
        });
    }

    const playVideo = async (index: number) => {
        const video = document.getElementById(`whatsFullVideoBg${videoItems[index].url.replace(/\//g, '_')}`) as HTMLVideoElement;
        await video?.play();
    }

    const pauseVideo = async (index: number, resetVideo = true) => {
        const video = document.getElementById(`whatsFullVideoBg${videoItems[index].url.replace(/\//g, '_')}`) as HTMLVideoElement;
        if (video?.currentTime > 0 || !video?.paused || !video?.ended) {
            video?.pause();
        }

        if (video && resetVideo) {
            video.currentTime = 0;
        }

        return video?.paused;
    }

    return (
        <div>
            <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={matches ? 3.25 : 5.5}
                watchSlidesProgress={true}
                className={classes.videoSwiper}
            >
                {
                    videoItems.map((item: any, index: number) => (
                        <SwiperSlide key={`swiperWhatsNewVideoItemSlide${index}`}>
                            <div className={classes.videoItem} onClick={(e) => openVideoModal(index)}>
                                <video id={`whatsNewVideoBg${item.url.replace(/\//g, '_')}`} className={classes.videoPlayer} muted={false}>
                                    <source src={`${ASSET_URL}${item.url}`} type="video/mp4" />
                                </video>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <hr />
            <div className={classes.sectionTitle}>How you stand</div>
            <div className={classes.sectionCenteredContent}>
                <ChanceGraphVertical data={selectedColleges} />
            </div>
            <hr />
            <Calendar />
            <VideoModal
                showDialog={videoModal}
                videos={videoItems}
                currentIndex={videoIndex}
                slideChanged={slideChanged}
                playVideo={playVideo}
                pauseVideo={pauseVideo}
                setShowDialog={setVideoModal}
            />
        </div>
    );
}