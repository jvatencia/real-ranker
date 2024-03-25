import ResponsiveBox from "../utilities/ResponsiveBox";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLinkItem } from "../../utils/interfaces/nav-link";
import { publicItems } from "../../utils/sidebar";
import NavLink from "./NavLink";
import { FONT_FAMILY } from "../../utils";

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
            fontFamily: FONT_FAMILY.DEFAULT,
            zIndex: 1045,
            backgroundColor: theme.palette.light.main,
            [theme.breakpoints.down('md')]: {
                height: '56px',
                boxShadow: 'none',
                position: 'relative'
            }
        },
        authGroup: {
            display: 'flex',
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        authLinks: {
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 700,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            marginRight: '25px',
            '&:hover': {
                color: theme.palette.warning.dark
            },
        },
        menuBtn: {
            display: 'none',
            [theme.breakpoints.down('md')]: {
                display: 'block'
            }
        },
        headerLogo: {
            width: '250px',
            [theme.breakpoints.down('md')]: {
                width: '150px'
            }
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
    const links: NavLinkItem[] = publicItems;

    const toggleMenu = () => {
        const el = document.getElementById('sidebar');
        el?.classList.toggle('active');
    }

    return (
        <header className={classes.header}>
            <ResponsiveBox>
                <div className={classes.headerContent}>
                    <div>
                        <img src="/logo.png" alt="logo.png" className={classes.headerLogo} />
                    </div>
                    <div>
                        <div className={classes.authGroup}>
                            {
                                links.map((link) => (
                                    <NavLink item={link} key={`navLinkItem${link.url.replace(/\//, '_')}`} />
                                ))
                            }
                        </div>
                        <div className={classes.menuBtn}>
                            <IconButton aria-label="delete" size="large" onClick={toggleMenu}>
                                <MenuIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </ResponsiveBox>
            <ResponsiveBox>

            </ResponsiveBox>
        </header>
    )
}