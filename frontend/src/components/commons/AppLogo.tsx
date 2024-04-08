import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { FONT_FAMILY } from "../../utils";

const useStyles = makeStyles(
    (theme) => ({
        headerLogoText: {
            fontFamily: FONT_FAMILY.POPPINS_BOLD,
            fontWeight: 'bold',
            fontSize: '2rem',
            color: theme.palette.light.main,
            useSelect: 'none',
            letterSpacing: 0,
            [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem'
            }
        },
        headerLogoYellow: {
            color: theme.palette.warning.main,
            textShadow: '0px 0px 1px ' + theme.palette.dark.main
        }
    })
)
export default function AppLogo() {
    const classes = useStyles();

    return (
        <Link to={'/dashboard'} style={{
            textDecoration: 'none'
        }}>
            <div className={classes.headerLogoText}><span className={classes.headerLogoYellow}>Real</span> Ranker</div>
        </Link>
    );
}