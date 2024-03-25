import { makeStyles } from "@mui/styles";
import Layout from "../../components/layout/Layout";
import CompareImg from '../../assets/compare.png';
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import { FONT_FAMILY } from "../../utils";

const useStyles = makeStyles(
    (theme: any) => ({
        heroSection: {
            height: '80vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            position: 'relative',
            padding: '20px 0',
            "&:before": {
                content: ' ',
                backgroundColor: theme.palette.primary.main,
                position: 'absolute',
                clipPath: 'polygon(15% 8%, 100% 0, 100% 75%, 100% 100%, 75% 84%, 18% 97%, 0% 75%)',
                width: '80%',
                height: '80%'
            },
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                height: 'auto'
            }
        },
        siteMotto: {
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
        },
        mottoWrapper: {
            lineHeight: 1,
            fontFamily: 'Arial',
            fontWeight: 'lighter',
            color: theme.palette.warning.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                padding: '0 16px'
            }

        },
        mottoSmall: {
            fontSize: '2rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem',
            }
        },
        mottoHeader: {
            fontSize: '3rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '2rem',
            }
        },
        collegeRanker: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 700
        },
        heroImgWrapper: {
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        heroMdImg: {
            width: '50%',
            objectFit: 'cover'
        },
        overviewSection: {
            width: '100%',
            height: '65vh',
            backgroundColor: '#313134'
        },
        testimonialSection: {
            height: '400px',
        },
        mainSection: {
            backgroundColor: theme.palette.secondary.main
        },
        overviewImg: {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        }
    })
);

export default function WelcomePage() {
    const classes = useStyles();

    return (
        <Layout unauthMode>
            <div className={classes.mainSection}>
                <div className={classes.heroSection}>
                    <div className={classes.siteMotto}>
                        <div className={classes.mottoWrapper}>
                            <div>
                                <div className={classes.mottoSmall}>A Classroom of One</div>
                                <div className={classes.mottoHeader}>Take your <span className={classes.collegeRanker}>Best Test</span> Today!</div>
                                <div className={classes.mottoSmall}>By <span className={classes.collegeRanker}>TheTestGuy</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.siteMotto} ${classes.heroImgWrapper}`}>
                        <img src={CompareImg} alt="compare.png" className={classes.heroMdImg} />
                    </div>
                </div>
            </div>
            <Services />
            <Testimonials />
        </Layout>
    )
}