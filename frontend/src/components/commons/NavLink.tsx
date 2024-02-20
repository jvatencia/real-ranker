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
            padding: '5px 36px',
            textAlign: 'left',
            cursor: 'pointer',
            "&:not(:first-child)": {
                borderTop: '1px solid rgba(0,0,0,0.3)'
            }
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
            boxShadow: '0px 0px 3px rgba(0,0,0,0.3)',
            borderRadius: '15px',
            borderTopLeftRadius: '0px',
            overflow: 'hidden',
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: theme.palette.light.main,
            },
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