import { Dialog, DialogContent, IconButton, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ASSET_URL, devices } from "../../utils";
import { SwiperSlide, Swiper, SwiperRef, useSwiper } from 'swiper/react';
import { useEffect, useRef, useState } from "react";
import { CloseOutlined, PlayArrow } from "@mui/icons-material";

const useStyles = makeStyles(
    (theme) => ({
        modalBody: {
            height: '100%',
            width: '100%',
            padding: '0',
            position: 'relative',
            background: theme.palette.dark.main,
            [theme.breakpoints.up('md')]: {
                height: '80vw !important',
            }
        },
        videoSwiper: {
            height: '100%'
        },
        videoPlayer: {
            height: '100%',
            width: '100%',
            userSelect: 'none',
            objectFit: 'scale-down',
        },
        videoToolbarOverlay: {
            position: 'absolute',
            background: 'rgba(0,0,0,0.0)',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        videoToolbar: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        videoToolbarBody: {
            width: '100%',
            height: 'calc(100% - 56px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        videoPlayerPlayPause: {
            bottom: '-50vh',
            position: 'absolute',
            alignSelf: 'center'
        }
    })
);

export function VideoModal({
    showDialog,
    setShowDialog,
    currentIndex,
    videos,
    slideChanged,
    playVideo,
    pauseVideo,
}: any) {
    const classes = useStyles();
    const isMobileLg = useMediaQuery(devices.mobileL);
    const [swiper, setSwiper] = useState<any | null>(null);
    const [play, setPlay] = useState(false);

    const handleModalClose = () => {
        pauseVideo(currentIndex);
        setPlay(false);
        setShowDialog(false);
    }


    useEffect(() => {
        console.log('[videoModal] currentIndex', currentIndex)
        console.log('[videoModal] showDialog', showDialog)
        console.log('[videoModal] activeIndex', swiper?.activeIndex)
        if (showDialog) {
            setTimeout(() => {
                swiper?.slideTo(currentIndex, 0);
                playVideo(currentIndex);
                setPlay(true);
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, showDialog]);

    const onVideoEnded = () => {
        swiper?.slideNext();
    }

    const handleAction = () => {
        if (play) {
            pauseVideo(currentIndex, false);
        } else {
            playVideo(currentIndex);
        }

        setPlay(!play);
    }

    return (
        <Dialog
            maxWidth={"sm"}
            fullScreen={isMobileLg}
            open={showDialog}
            onClose={handleModalClose}
            aria-labelledby="max-width-dialog-title"
            keepMounted
            sx={{
                zIndex: 1200
            }}
        >
            <DialogContent className={classes.modalBody}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={slideChanged}
                    className={classes.videoSwiper}
                    onSwiper={(item: any) => setSwiper(item)}
                    loop
                >
                    {
                        videos.map((item: any) => (

                            <SwiperSlide key={`whatsFullVideoSwiperSlide${item.url.replace(/\//g, '_')}`}>
                                <div className={classes.videoSwiper} onClick={handleAction}>
                                    <video
                                        id={`whatsFullVideoBg${item.url.replace(/\//g, '_')}`}
                                        onEnded={onVideoEnded}
                                        className={classes.videoPlayer} muted={false}>
                                        <source src={`${ASSET_URL}${item.url}`} type='video/mp4' />
                                    </video>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
                <div className={classes.videoToolbarOverlay}>
                    <div className={classes.videoToolbar}>
                        <IconButton onClick={handleModalClose}>
                            <CloseOutlined color="light" fontSize="large" />
                        </IconButton>
                    </div>
                    {
                        !play &&
                        <div className={classes.videoPlayerPlayPause}>
                            <IconButton>
                                <PlayArrow color="light" fontSize="large" style={{ fontSize: '100px' }} />
                            </IconButton>
                        </div>
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
}