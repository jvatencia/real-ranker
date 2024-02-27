import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(
    (theme) => ({
        headerLogoText: {
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            fontSize: '2rem',
            color: theme.palette.primary.main,
            useSelect: 'none',
            letterSpacing: 0,
            [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem'
            }
        },
        headerLogoYellow: {
            color: theme.palette.warning.dark
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