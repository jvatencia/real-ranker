import { Swiper, SwiperSlide } from 'swiper/react';
import ComparisonCard from './ComparisonCard';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { devices } from '../../utils/breakpoints';

const useStyles = makeStyles(
    (theme) => ({
        comparisonSlide: {
            width: '300px !important',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
        }
    })
)
const chunkCollege = (colleges: any[], classes: any, chunkSize: number = 2) => {
    const chunkedArray: any[] = [];

    if (colleges.length % 2 === 1) {
        return false;
    }

    for (let i = 0; i < colleges.length; i += chunkSize) {
        const chunk = colleges.slice(i, i + chunkSize);
        chunkedArray.unshift(chunk);
    }

    return (
        <>
            {
                chunkedArray.map(([college1, college2]: any[], index: number) => (
                    <SwiperSlide key={`swiperSlideComparisonSlider${index}`}>
                        <ComparisonCard college1={college1} college2={college2} />
                    </SwiperSlide>
                ))
            }
        </>
    );
}
export default function ComparisonSliders({ colleges }: any) {
    const classes = useStyles();
    const isMobile = useMediaQuery(devices.mobileL);

    return (
        <div style={{ marginTop: '20px', padding: '20px 0' }}>
            <Swiper
                spaceBetween={20}
                slidesPerView={isMobile ? 1 : 1.8}
            >
                {chunkCollege(colleges, classes)}
            </Swiper>
        </div>
    );
}