/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from '@mui/styles';
import { useEffect, useRef, useState } from 'react';
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import ResponsiveBox from '../../../components/utilities/ResponsiveBox';
import { IconButton, Slide } from '@mui/material';
import { PauseOutlined, PlayArrowOutlined, VolumeOffOutlined, VolumeUpOutlined } from '@mui/icons-material';
import { PUBLIC_TESTIMONIALS } from '../../../utils';

const useStyles = makeStyles(
    (theme: any) => ({
        testimonialVideoWrapper: {
            width: '60%',
            height: '500px',
            backgroundColor: theme.palette.primary.main,
            padding: '10px 0px',
            position: 'relative',
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                height: '400px',
                width: '100%',
            }
        },
        testimonialSwiper: {
            width: '100%',
        },
        testimonialCard: {
            padding: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none'
        },
        testimonialAvatarWrapper: {
            height: '80px',
            width: '80px',
            objectFit: 'cover',
            borderRadius: '50%',
            overflow: 'hidden',
            transition: '0.3s ease-in-out',
            transform: 'scale(1.2)',
            [theme.breakpoints.down('md')]: {
                height: '60px',
                width: '60px',
            }
        },
        testimonialAvatar: {
            height: '100%',
            width: '100%',
        },
        testimonialContent: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
            }
        },
        testimonialPlayer: {
            width: '100%',
            position: 'absolute',
            right: '0',
            bottom: '0',
            height: '100%',
            zIndex: '0',
            [theme.breakpoints.down('md')]: {
                objectFit: 'cover'
            }
        },
        inactiveTestimonial: {
            opacity: '0.4'
        },
        testimonialSliders: {
            padding: '16px 0'
        },
        testimonialQuoteWrapper: {
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '350px',
            position: 'relative',
            transform: 'translateX(20px)',
            zIndex: 1,
            [theme.breakpoints.down('md')]: {
                height: '300px',
                width: '95%',
                transform: 'translateY(10px)',
                margin: '0 auto'
            }
        },
        testimonialQuoteCard: {
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.light.main,
            borderRadius: '5px',
            position: 'absolute',
            padding: '16px 24px',
            [theme.breakpoints.down('md')]: {
                boxShadow: '0px 3px 3px rgba(0,0,0,0.3)'
            }
        },
        testimonialQuoteCardTitle: {
            fontSize: '36px',
            fontFamily: 'Poppins',
            color: theme.palette.primary.main,
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        testimonialQuoteCardContent: {
            fontSize: '20px',
            fontFamily: 'Poppins',
            fontStyle: 'italic',
            color: theme.palette.primary.main,
            height: 'calc(100% - 200px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        testimonialSection: {
            backgroundColor: theme.palette.primary.main,
            padding: '16px 0',
            [theme.breakpoints.down('md')]: {
                padding: '8px 0'
            }
        },
        sectionHeaderWrapper: {
            [theme.breakpoints.down('md')]: {
                padding: '0 16px'
            }
        },
        sectionHeader: {
            color: theme.palette.light.main,
            margin: '20px 0',
            fontFamily: 'Poppins',
            fontSize: '48px',
            [theme.breakpoints.down('md')]: {
                fontSize: '36px'
            }
        },
        videoBtns: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }
    })
)
export default function Testimonials() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const swiperRef = useRef<SwiperRef>(null);
    const testimonialWrapperRef = useRef<HTMLDivElement>(null);
    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(0);
    const [videoPlayback, setVideoPlayback] = useState(false);
    const [videoMuted, setVideoMuted] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const videos = PUBLIC_TESTIMONIALS;

    const slideChanged = (res: any) => {
        console.log('slideChanged!', res.realIndex)
        setIsPlaying(res.realIndex);
    };

    const onVideoEnd = () => {
        swiperRef.current?.swiper.slideNext();
    }

    const onCardClick = (video: any, index: number) => {
        console.log('card index', index);
        swiperRef.current?.swiper.slideToLoop(index);
    }

    const handlePausePlayClick = () => {
        if (!videoRef?.current?.paused) {
            videoRef?.current?.pause();
            setVideoPlayback(false);
        } else {
            videoRef?.current?.play();
            setVideoPlayback(true);
        }
    }

    const handleVideoMute = () => {
        if (!videoRef?.current?.muted) {
            setVideoMuted(true);
        } else {
            setVideoMuted(false);
        }
        videoRef.current!.muted = !videoRef.current!.muted;
    }


    const checkIntersecting = () => {
        if (entry?.isIntersecting) {
            if (videoRef?.current) {
                videoRef?.current?.load();
                const played = videoRef.current?.play();
                if (played !== undefined) {
                    played.then(() => {
                        setVideoPlayback(true);
                    }).catch((error) => console.log(error))
                }
            }
        }
    }

    useEffect(() => {
        videoRef.current?.addEventListener("ended", onVideoEnd);
    }, []);

    useEffect(() => {
        checkIntersecting();
    }, [isPlaying])


    useEffect(() => {
        console.log('[nowPlaying]', videos[isPlaying]?.url);
    }, [inView]);

    return (
        <div className={classes.testimonialSection}>
            <ResponsiveBox >
                <div className={classes.sectionHeaderWrapper}>
                    <h3 className={classes.sectionHeader}>What our families say</h3>
                    <div className={classes.videoBtns}>
                        <IconButton aria-label="mute" color="light" onClick={handleVideoMute}>
                            {
                                videoMuted ?
                                    <VolumeOffOutlined /> :
                                    <VolumeUpOutlined />
                            }
                        </IconButton>
                        <IconButton aria-label="mute" color="light" onClick={handlePausePlayClick}>
                            {
                                videoPlayback ?
                                    <PauseOutlined /> :
                                    <PlayArrowOutlined />
                            }
                        </IconButton>
                    </div>
                </div>
            </ResponsiveBox>
            <div className={classes.testimonialContent}>
                <div className={classes.testimonialQuoteWrapper} ref={testimonialWrapperRef}>
                    {
                        videos.map((video, index) => (
                            <Slide
                                key={`swiperTestimonialQuote${video.id}${index}`}
                                direction="right"
                                appear={isPlaying === index}
                                in={isPlaying === index}
                                container={testimonialWrapperRef.current}
                            >

                                <div className={classes.testimonialQuoteCard}>
                                    <div className={classes.testimonialQuoteCardTitle}>
                                        {video.details.speaker}
                                    </div>
                                    <div className={classes.testimonialQuoteCardContent}>
                                        "{video.details.content}"
                                    </div>
                                </div>
                            </Slide>
                        ))
                    }

                </div>
                <div className={classes.testimonialVideoWrapper} ref={ref}>

                    <video id='testimonialVideoBg' ref={videoRef} autoPlay={inView} className={classes.testimonialPlayer} muted={!inView} playsInline={inView}>
                        <source src={videos[isPlaying].url} />
                    </video>
                </div>
            </div>
            <div className={classes.testimonialSliders}>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={false}
                    onSlideChange={slideChanged}
                    watchSlidesProgress={true}
                    className={classes.testimonialSwiper}
                    centeredSlides
                    loop
                >
                    {
                        videos.map((video: any, index: number) => (
                            <SwiperSlide key={`swiperTestimonialVideo${video.id}`}>
                                <div className={classes.testimonialCard} onClick={() => onCardClick(video, index)}>
                                    <div className={`${classes.testimonialAvatarWrapper} ${isPlaying !== index ? classes.inactiveTestimonial : ''}`}>
                                        <img src={video.thumbnail} className={classes.testimonialAvatar} alt={video.thumbnail} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}