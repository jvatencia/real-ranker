import { makeStyles } from "@mui/styles"
import { useMediaQuery } from "@mui/material";
import { authItems, devices, publicItems } from "../../utils";
import { useEffect } from "react";
import SidebarItem from "../commons/SidebarItem";
import AppLogo from "../commons/AppLogo";

const useStyles = makeStyles(
    (theme: any) => ({
        sidebarWrapper: {
            height: 'calc(100vh)',
            width: '300px',
            backgroundColor: theme.palette.light.main,
            boxShadow: '3px 0px 5px rgba(0,0,0,0.3)'
        },
        sidebarLogo: {
            height: '55px',
            width: '100%',
            padding: '10px'
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
    }, [matches]);

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
        <>
            <div className="app-sidebar" id="sidebar">
                <div className={`${classes.sidebarWrapper}`}>
                    <div className={classes.sidebarLogo}>
                        <AppLogo />
                    </div>
                    {
                        items.map((item) => (
                            <SidebarItem closeSidebar={closeSidebar} item={item} key={`sidebarItem${item.url.replace(/\//, '_')}`} />
                        ))
                    }
                </div>
            </div>
            <div id="sidebar-backdrop" onClick={closeSidebar}></div>
        </>
    )
}