import { makeStyles } from "@mui/styles";
import ResponsiveBox from "../utilities/ResponsiveBox";
import useAuthStore from "../../store/auth/auth.store";
import { IconButton, Popover } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) => ({
    headerShadow: {
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
    },
    header: {
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.3s ease-in-out',
        backgroundColor: theme.palette.light.main,
        fontFamily: 'Poppins',
        [theme.breakpoints.down('md')]: {
            height: '56px',
            boxShadow: 'none'
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
    }
}));

export interface AppHeaderProps {
    unauthMode?: boolean;
}

function AppHeader({ unauthMode }: AppHeaderProps) {
    const classes = useStyles();
    const isAuthenticated = useAuthStore((state => !!state.token));
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const logout = useAuthStore((state) => state.logout);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const profilePopoverItems = [
        { icon: <PersonIcon />, title: 'Profile', handler: () => null },
        { icon: <LogoutIcon />, title: 'Log Out', handler: logout },
    ];

    const open = Boolean(anchorEl);
    const id = open ? 'header-popover' : undefined;

    return (
        <header className={`${classes.header} ${unauthMode ? '' : classes.headerShadow}`}>
            <ResponsiveBox style={{ padding: '0 16px' }} >
                <div className={classes.headerContent}>
                    <div>
                        <img src="/logo.png" alt="logo.png" className={classes.headerLogo} />
                    </div>
                    {
                        isAuthenticated ?
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
                            <div className={classes.realRankerLabel}>
                                Real Ranker
                            </div>
                    }
                </div>
            </ResponsiveBox>
        </header>
    );
}

export default AppHeader;