import { makeStyles } from "@mui/styles";
import ResponsiveBox from "../utilities/ResponsiveBox";
import { Link } from "react-router-dom";
import { Instagram, LanguageOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    footer: {
        background: theme.palette.secondary.main,
        width: '100%',
        height: '120px',
        [theme.breakpoints.down('md')]: {
            height: '180px',
        }
    },
    copyRightText: {
        color: theme.palette.light.main,
        marginBottom: '5px',
    },
    socialMediaLinks: {
        display: 'flex',
        marginBottom: '5px'
    },
    socialMediaLink: {
        margin: '0 5px'
    }
}))

const TikTokIcon = ({ color = "#000000", style }: any) => {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100%"
            height="100%"
            style={style}
        >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg>
    );
};

export function AppFooter() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerWrapper}>
                <ResponsiveBox sx={{ height: '100%' }} >
                    <div className={classes.footerWrapper}>
                        <div className={classes.socialMediaLinks}>
                            <div className={classes.socialMediaLink}>
                                <Link to={'https://www.instagram.com/thetestguy/?hl=en'}>
                                    <Instagram fontSize={'large'} color="light" />
                                </Link>
                            </div>
                            <div className={classes.socialMediaLink}>
                                <Link to={'https://www.tiktok.com/@thetestguy'}>
                                    <TikTokIcon color={theme.palette.light.main} style={{ height: '34px', width: '34px' }} />
                                </Link>
                            </div>
                            <div className={classes.socialMediaLink}>
                                <Link to={'https://thetestguy.com/dev/'}>
                                    <LanguageOutlined fontSize={'large'} color="light" />
                                </Link>
                            </div>
                        </div>
                        <div className={classes.copyRightText}>© 2024 The Test Guy | All Rights Reserved</div>
                    </div>
                </ResponsiveBox>
            </div>
        </footer>
    );
}