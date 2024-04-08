import { Dialog, DialogContent, IconButton, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ASSET_URL, devices } from "../../utils";
import { SwiperSlide, Swiper, SwiperRef, useSwiper } from 'swiper/react';
import { useEffect, useRef, useState } from "react";
import { CloseOutlined } from "@mui/icons-material";

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
            objectFit: 'cover',
            [theme.breakpoints.up('md')]: {
                objectFit: 'scale-down'
            }
        },
        videoToolbar: {
            position: 'absolute',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '56px',
            top: 0,
            left: 0,
            zIndex: 1
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
    const handleModalClose = () => {
        pauseVideo(currentIndex);
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
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, showDialog]);

    const onVideoEnded = () => {
        swiper?.slideNext();
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
                                <div className={classes.videoSwiper}>
                                    <video
                                        id={`whatsFullVideoBg${item.url.replace(/\//g, '_')}`}
                                        onEnded={onVideoEnded}
                                        className={classes.videoPlayer} muted={false}>
                                        <source src={`${ASSET_URL}${item.url}`} />
                                    </video>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
                <div className={classes.videoToolbar}>
                    <IconButton onClick={handleModalClose}>
                        <CloseOutlined color="light" fontSize="large" />
                    </IconButton>
                </div>
            </DialogContent>
        </Dialog>
    );
}