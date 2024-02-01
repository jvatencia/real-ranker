import { makeStyles } from "@mui/styles";
import Layout from "../../components/layout/Layout";
import CompareImg from '../../assets/compare.png';
import Testimonials from "./components/Testimonials";

const useStyles = makeStyles(
    (theme: any) => ({
        heroSection: {
            height: '100vh',
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
                flexDirection: 'column'
            }
        },
        siteMotto: {
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        mottoWrapper: {
            lineHeight: 1,
            fontFamily: 'Arial',
            fontWeight: 'lighter',
            color: theme.palette.warning.main
        },
        mottoSmall: {
            fontSize: '2rem'
        },
        mottoHeader: {
            fontSize: '3rem'
        },
        collegeRanker: {
            fontFamily: 'Poppins',
            fontWeight: 700
        },
        heroMdImg: {
            width: '80%',
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
                            <div className={classes.mottoSmall}>Let's go</div>
                            <div className={classes.mottoHeader}>Take your <span className={classes.collegeRanker}>Best Test</span> Today!</div>
                            <div className={classes.mottoSmall}>By <span className={classes.collegeRanker}>TheTestGuy</span></div>
                        </div>
                    </div>
                    <div className={classes.siteMotto}>
                        <img src={CompareImg} alt="compare.png" className={classes.heroMdImg} />
                    </div>
                </div>
            </div>
            {/* <div className={classes.overviewSection}>
                <img src="/assets/services-gif-2.gif" alt="services-gif-2.gif" className={classes.overviewImg} />
            </div> */}
            <Testimonials />
        </Layout>
    )
}