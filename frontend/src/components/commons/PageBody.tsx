import { Slide } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { FONT_FAMILY } from "../../utils";

const useStyles = makeStyles(
    (theme) => ({
        pageBody: {
            width: '100%',
            padding: '10px 8px',
            borderRadius: '5px',
            fontFamily: FONT_FAMILY.DEFAULT,
            display: 'flex',
            overflowX: 'hidden',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'column'
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: '50px',
                padding: '20px 16px',
            },
        },
        primaryContent: {
            width: '80%',
            background: theme.palette.light.main,
            [theme.breakpoints.between(1000, 1025)]: {
                width: '85% !important',
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
            }
        },
        secondaryContent: {
            width: '20%',
            transition: '0.5s ease-in-out',
            background: theme.palette.light.main,
            [theme.breakpoints.down('md')]: {
                width: '100%',
                padding: '10px 16px',
                zIndex: 2,
            }
        },
    })
);

interface PageBodyProps {
    children: any;
    moreContentSlot?: any;
}

export default function PageBody({ children, moreContentSlot }: PageBodyProps) {
    const classes = useStyles();

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className={classes.pageBody}>
                <div className={classes.primaryContent}>
                    {children}
                </div>
                {
                    moreContentSlot &&
                    <div className={classes.secondaryContent}
                    >
                        {moreContentSlot}
                    </div>
                }
            </div>
        </Slide>
    )
}