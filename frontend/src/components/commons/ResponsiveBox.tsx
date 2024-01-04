import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";
import { useEffect } from "react";

const useStyles = makeStyles(
    (theme: any) => ({
        responsiveContainer: {
            margin: '0 auto',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '960px'
            },
            [theme.breakpoints.up('lg')]: {
                width: '1024px'
            },
            [theme.breakpoints.up('xl')]: {
                width: '1240px'

            }
        },
        boxStyling: {
            padding: '10px 16px',
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