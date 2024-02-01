import { makeStyles } from "@mui/styles"
import { NavLinkItem } from "../../utils/interfaces/nav-link";
import { ClickAwayListener, useMediaQuery } from "@mui/material";
import { devices, sidebarItems } from "../../utils";
import { useEffect } from "react";
import SidebarItem from "../commons/SidebarItem";

const useStyles = makeStyles(
    (theme: any) => ({
        sidebarWrapper: {
            height: 'calc(100vh)',
            width: '300px',
            backgroundColor: theme.palette.light.main,
            position: 'fixed',
            left: 0,
            top: '0',
            zIndex: 1042,
            transition: '0.3s ease-in-out',
            paddingTop: '56px'
        }
    })
);


interface SidebarProps {
    authenticated: boolean
}
export default function Sidebar({ authenticated }: Readonly<SidebarProps>) {
    const classes = useStyles();

    const matches = useMediaQuery(devices.laptopS);
    const items = !authenticated ? sidebarItems : [];
    useEffect(() => {
        toggleMenu();

    }, [matches])

    const toggleMenu = () => {
        const el = document.getElementById('sidebar');

        if (el?.classList.contains('active')) {
            el.classList.toggle('active');
        }
    }

    return (
        <div className={`${classes.sidebarWrapper} app-sidebar`} id='sidebar'>
            {
                items.map((item) => (
                    <SidebarItem item={item} key={`sidebarItem${item.url.replace(/\//, '_')}`} />
                ))
            }
        </div>
    )
}