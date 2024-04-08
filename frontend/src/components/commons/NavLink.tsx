import { Link } from "react-router-dom";
import { NavLinkItem } from "../../utils/interfaces"
import { makeStyles } from "@mui/styles";
import DropdownNavLink from "./DropdownNavLink";
import { FONT_FAMILY } from "../../utils";

const useStyles = makeStyles(
    (theme: any) => ({
        authLinks: {
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 700,
            color: theme.palette.light.main,
            textDecoration: 'none',
            marginRight: '25px',
            '&:hover': {
                color: theme.palette.light.main,
            },
        },
        dropdownNavItem: {
            padding: '15px 25px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: theme.palette.light.main,
            "&:not(:first-child)": {
                borderTop: '1px solid rgba(0,0,0,0.3)'
            },
            '&:hover *': {
                color: theme.palette.primary.dark,
            },
        },
        dropdownNavItemIcon: {
            marginRight: '10px'
        },
        dropdownNavItemText: {
            color: theme.palette.dark.main,
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: 14,
        },
        dropdownWrapper: {
            backgroundColor: theme.palette.light.main
        },
        toolTipNavItem: {
            borderRadius: '5px',
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