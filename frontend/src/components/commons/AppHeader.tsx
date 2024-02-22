import { makeStyles } from "@mui/styles";
import ResponsiveBox from "../utilities/ResponsiveBox";
import useAuthStore from "../../store/auth/auth.store";
import { IconButton, Popover, useMediaQuery } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { devices } from "../../utils";
import { MenuOutlined } from "@mui/icons-material";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme: any) => ({
    headerShadow: {
        boxShadow: '0 4px 6px -6px rgba(0,0,0,.24), 0 2px 3px -3px rgba(0,0,0,.24)',
    },
    header: {
        width: '100%',
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: '0.3s ease-in-out',
        backgroundColor: theme.palette.light.main,
        fontFamily: 'Poppins',
        borderBottom: '1px solid rgba(0,0,0,0.3)',
        [theme.breakpoints.down('md')]: {
            height: '56px',
            minHeight: 'unset',
            boxShadow: 'none'
        }
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            padding: '5px 8px'
        }
    },
    realRankerLabel: {
        fontFamily: 'Poppins',
        color: '#222224',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
    popOverContent: {
        padding: '10px 0px',
        width: ''
    },
    popOverItem: {
        display: 'flex',
        alignItemsCenter: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '5px 10px',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0.1)'
        }
    },
    popOverItemTitle: {
        marginLeft: '30px'
    },
    authLinks: {
        fontSize: '16px',
        cursor: 'pointer',
        fontFamily: 'Poppins',
        fontWeight: 700,
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    headerLogo: {
        width: '200px'
    },
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
}));

export interface AppHeaderProps {
    unauthMode?: boolean;
}

function AppHeader({ unauthMode }: Readonly<AppHeaderProps>) {
    const classes = useStyles();
    const matches = useMediaQuery(devices.mobileL);
    // const isAuthenticated = useAuthStore((state => !!state.token));
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const logout = useAuthStore((state) => state.logout);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleMenu = () => {
        const el = document.getElementById('sidebar');
        el?.classList.toggle('active');
    }

    const profilePopoverItems = [
        {
            icon: <PersonIcon />, title: 'Profile', handler: () => {
                navigate('/profile');
                handleClose();
            }
        },
        { icon: <LogoutIcon />, title: 'Log Out', handler: logout },
    ];

    const open = Boolean(anchorEl);
    const id = open ? 'header-popover' : undefined;

    return (
        <header className={`${classes.header} ${unauthMode ? '' : classes.headerShadow}`}>
            <ResponsiveBox style={{ padding: '0 16px' }} >
                <div className={classes.headerContent}>
                    <div>
                        {/* <img src="/logo.png" alt="logo.png" className={classes.headerLogo} /> */}
                        <Link to={'/dashboard'} style={{
                            textDecoration: 'none'
                        }}>
                            <div className={classes.headerLogoText}><span className={classes.headerLogoYellow}>Real</span> Ranker</div>
                        </Link>
                    </div>
                    {
                        !matches ?
                            <div>
                                <IconButton aria-label="profile" size="large"
                                    onClick={handleClick}
                                    aria-describedby={id}>
                                    <AccountCircleIcon color="primary" fontSize="inherit" />
                                </IconButton>

                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <div className={classes.popOverContent}>
                                        {
                                            profilePopoverItems.map((item, index) => (
                                                <div className={classes.popOverItem} onClick={item.handler} key={`profilePopoverItem${index}`}>
                                                    {item.icon}
                                                    <span className={classes.popOverItemTitle}>{item.title}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Popover>
                            </div>
                            :
                            <IconButton aria-label="menu" size="large"
                                onClick={toggleMenu}>
                                <MenuOutlined color="primary" fontSize="inherit" />
                            </IconButton>
                    }
                </div>
            </ResponsiveBox> {
                !matches &&
                <ResponsiveBox>
                    <Navbar />
                </ResponsiveBox>
            }
        </header>
    );
}

export default AppHeader;