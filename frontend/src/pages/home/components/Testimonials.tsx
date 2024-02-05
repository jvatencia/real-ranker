import { makeStyles } from '@mui/styles';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import ResponsiveBox from '../../../components/utilities/ResponsiveBox';
import { IconButton } from '@mui/material';
import { PauseOutlined, PlayArrowOutlined, VolumeOffOutlined, VolumeUpOutlined } from '@mui/icons-material';

const useStyles = makeStyles(
    (theme: any) => ({
        testimonialWrapper: {
            width: '100%',
            height: '60vh',
            backgroundColor: theme.palette.primary.main,
            padding: '10px 0px',
            position: 'relative',
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center'
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
            height: '100px',
            width: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            overflow: 'hidden'
        },
        testimonialAvatar: {
            height: '100%',
            width: '100%',
        },
        testimonialPlayer: {
            width: '100%',
            position: 'absolute',
            right: '0',
            bottom: '0',
            height: '100%',
            zIndex: '0'
        },
        inactiveTestimonial: {
            opacity: '0.4'
        },
        testimonialSection: {
            backgroundColor: theme.palette.primary.main,
            padding: '16px 24px',
            [theme.breakpoints.down('md')]: {
                padding: '8px 12px'
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
    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(0);
    const [videoPlayback, setVideoPlayback] = useState(false);
    const [videoMuted, setVideoMuted] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const videos = [
        {
            id: 1,
            url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Amy-60-second-version.mp4',
            thumbnail: '/assets/testimonials/amy.png'
        },
        {
            id: 2,
            url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Borezan-60-second-version.mp4',
            thumbnail: '/assets/testimonials/ally.png'
        },
        {
            id: 3,
            url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Gary-Pilnick-60-seconds.mp4',
            thumbnail: '/assets/testimonials/gary.png'
        },
        {
            id: 4,
            url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Tolliver-60-second.mp4',
            thumbnail: '/assets/testimonials/tolliver.png'
        },
    ];

    const slideChanged = (res: any) => {
        // setIsPlaying(null);
        console.log('slideChanged!', res.realIndex)
        setIsPlaying(res.realIndex);
    };

    const onVideoEnd = () => {
        swiperRef.current?.swiper.slideNext();
    }

    const onCardClick = (video: any, index: number) => {
        swiperRef.current?.swiper.slideTo(video.id - 1);
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

    useEffect(() => {
        videoRef.current?.addEventListener("ended", onVideoEnd);
    }, []);

    useEffect(() => {
        if (entry?.isIntersecting) {
            if (videoRef && videoRef.current) {

                const played = videoRef.current?.play();
                if (played !== undefined) {
                    played.then((res) => {
                        console.log(res)
                    }).catch((error) => console.log(error))
                    setVideoPlayback(true);
                }
            }
        }
    }, [entry])

    useEffect(() => {
        console.log('inView Changed', inView);
        console.log('videoRef', videoRef?.current);
        videoRef?.current?.load();
    }, [isPlaying, inView]);

    return (
        <div className={classes.testimonialSection}>
            <ResponsiveBox>
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
            </ResponsiveBox>
            <div className={classes.testimonialWrapper} ref={ref}>

                <video id='testimonialVideoBg' ref={videoRef} autoPlay={inView} className={classes.testimonialPlayer} muted={!inView} playsInline={inView}>
                    <source src={videos[isPlaying].url} />
                </video>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={25}
                    slidesPerView={3.5}
                    autoplay={false}
                    onSlideChange={slideChanged}
                    watchSlidesProgress={true}
                    className={classes.testimonialSwiper}
                    centeredSlides
                // loop
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