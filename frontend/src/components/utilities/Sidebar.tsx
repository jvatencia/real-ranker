import { makeStyles } from "@mui/styles"
import { NavLinkItem } from "../../utils/interfaces/nav-link";
import { useMediaQuery } from "@mui/material";
import { devices } from "../../utils";
import { useEffect } from "react";

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
    sidebarItems?: NavLinkItem[]
}
export default function Sidebar({ sidebarItems }: Readonly<SidebarProps>) {
    const classes = useStyles();

    const matches = useMediaQuery(devices.laptopS);

    useEffect(() => {
        const el = document.getElementById('sidebar');

        if (el?.classList.contains('active')) {
            el.classList.toggle('active');
        }
    }, [matches])

    return (
        <div className={`${classes.sidebarWrapper} app-sidebar`} id='sidebar'>
        </div>
    )
}