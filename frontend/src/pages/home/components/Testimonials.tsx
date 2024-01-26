import { makeStyles } from '@mui/styles';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles(
    (theme: any) => ({
        testimonialWrapper: {
            width: '100%',
            height: '60vh',
            backgroundColor: theme.palette.primary.main,
            padding: '10px 0',
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
        }
    })
)
export default function Testimonials() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const swiperRef = useRef<SwiperRef>(null);
    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(0);
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

    useEffect(() => {
        videoRef.current?.addEventListener("ended", onVideoEnd);
    }, []);

    useEffect(() => {
        if (entry?.isIntersecting) {
            videoRef?.current?.scrollIntoView();
        }
    }, [entry])

    useEffect(() => {
        videoRef?.current?.load();
    }, [isPlaying]);

    return (
        <div className={classes.testimonialWrapper} ref={ref}>

            <video ref={videoRef} autoPlay={inView} className={classes.testimonialPlayer} muted={!inView}>
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
    );
}