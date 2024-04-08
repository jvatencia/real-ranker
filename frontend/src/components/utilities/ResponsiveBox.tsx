import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";
import { useEffect } from "react";

const useStyles = makeStyles(
    (theme: any) => ({
        responsiveContainer: {
            width: '100vw',
            [theme.breakpoints.up('md')]: {
                // width: '960px',
                padding: '0 40px',
            },
            // [theme.breakpoints.up('lg')]: {
            //     width: '1024px'
            // },
            // [theme.breakpoints.up('xl')]: {
            //     width: '1240px'
            // }
        },
        boxStyling: {
            padding: '10px 24px',
            [theme.breakpoints.down('md')]: {
                padding: '5px 8px',
            }
        }
    })
);

export default function ResponsiveBox(props: any) {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = useStyles();

    useEffect(() => {

    }, [matchesSm, matchesMd, matchesLg]);

    return (
        <div className={`${classes.responsiveContainer} ${props.hasPadding ? classes.boxStyling : ''}`}>
            {props.children}
        </div>
    );
}