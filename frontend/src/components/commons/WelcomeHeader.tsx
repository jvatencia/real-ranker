import { Link } from "react-router-dom";
import ResponsiveBox from "./ResponsiveBox";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme: any) => ({
        header: {
            width: '100%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            transition: '0.3s ease-in-out',
            fontFamily: 'Poppins',
            backgroundColor: theme.palette.light.main,
            [theme.breakpoints.down('md')]: {
                height: '56px',
                boxShadow: 'none'
            }
        },
        authLinks: {
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: 'Poppins',
            fontWeight: 700,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
                color: theme.palette.warning.dark
            }
        },
        headerLogo: {
            width: '250px'
        },
        headerContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                padding: '0 8px'
            }
        }
    })
)
export default function WelcomeHeader() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <ResponsiveBox>
                <div className={classes.headerContent}>
                    <div>
                        <img src="/logo.png" alt="logo.png" className={classes.headerLogo} />
                    </div>
                    <div>
                        <Link to={'/login'} className={classes.authLinks}>
                            <span >
                                Login
                            </span>
                        </Link>
                    </div>
                </div>
            </ResponsiveBox>
            <ResponsiveBox>

            </ResponsiveBox>
        </header>
    )
}