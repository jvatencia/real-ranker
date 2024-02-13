import { makeStyles } from "@mui/styles";
import { authItems, sizes } from "../../utils";
import { NavLinkItem } from "../../utils/interfaces";
import NavLink from "./NavLink";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles(
    (theme) => ({
        navbar: {
            display: 'flex',
            padding: '16px 20px',
            [theme.breakpoints.down('md')]: {
                padding: '8px 20px'
            }
        }
    })
)

const NavbarItem = ({ link }: any) => {
    const component = (<NavLink item={link} key={`navLinkItem${link.url.replace(/\//, '_')}`} />);
    const matches = useMediaQuery(link.showWhen || sizes.tablet);
    if (link.showWhen) {
        return matches ? component : null;
    }

    return component;
}
export default function Navbar() {
    const classes = useStyles();
    const links: NavLinkItem[] = authItems;

    return (
        <div className={classes.navbar}>
            {
                links.map((link) => <NavbarItem link={link} key={`navBarItem${link.url.replace(/\//, '_')}`} />)
            }
        </div>
    );
}