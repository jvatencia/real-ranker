import { makeStyles } from "@mui/styles"
import { useMediaQuery } from "@mui/material";
import { authItems, devices, publicItems } from "../../utils";
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
            paddingTop: '55px',
            boxShadow: '3px 0px 5px rgba(0,0,0,0.3)'
        }
    })
);


interface SidebarProps {
    authenticated: boolean
}
export default function Sidebar({ authenticated }: Readonly<SidebarProps>) {
    const classes = useStyles();

    const matches = useMediaQuery(devices.laptopS);
    const items = !authenticated ? publicItems : authItems;
    useEffect(() => {
        toggleMenu();

    }, [matches])

    const toggleMenu = () => {
        const el = document.getElementById('sidebar');

        if (el?.classList.contains('active')) {
            el.classList.toggle('active');
        }
    }

    const closeSidebar = () => {
        const el = document.getElementById('sidebar');
        if (el?.classList.contains('active')) {
            el.classList.remove('active');
        }
    }

    return (
        <div className={`${classes.sidebarWrapper} app-sidebar`} id='sidebar'>
            <div></div>
            {
                items.map((item) => (
                    <SidebarItem closeSidebar={closeSidebar} item={item} key={`sidebarItem${item.url.replace(/\//, '_')}`} />
                ))
            }
        </div>
    )
}