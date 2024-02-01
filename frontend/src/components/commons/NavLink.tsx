import { Link } from "react-router-dom";
import { NavLinkItem } from "../../utils/interfaces"
import { makeStyles } from "@mui/styles";
import DropdownNavLink from "./DropdownNavLink";
import { tooltipClasses } from "@mui/material";

const useStyles = makeStyles(
    (theme: any) => ({
        authLinks: {
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: 'Poppins',
            fontWeight: 700,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            marginRight: '25px',
            '&:hover': {
                color: theme.palette.warning.dark
            },
        },
        dropdownNavItem: {
            padding: '16px 36px',
            textAlign: 'left',
            cursor: 'pointer',
        },
        dropdownNavItemText: {
            color: theme.palette.primary.main,
            fontFamily: 'Poppins',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: 14,
            '&:hover': {
                color: theme.palette.warning.dark
            },
        },
        dropdownWrapper: {
            backgroundColor: theme.palette.light.main
        },
        toolTipNavItem: {
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: theme.palette.light.main
            }
        }
    })
);

interface NavLinkProps {
    item: NavLinkItem;
}
export default function NavLink({ item }: NavLinkProps) {
    const classes = useStyles();
    return (
        <>
            {
                item.items.length === 0 ?
                    <Link to={item.url} className={classes.authLinks}>
                        <span >
                            {item.text}
                        </span>
                    </Link>
                    :
                    <DropdownNavLink classes={classes} item={item} />
            }
        </>
    )
}