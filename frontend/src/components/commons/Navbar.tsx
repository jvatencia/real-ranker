import { makeStyles } from "@mui/styles";
import { authItems, sizes, testguyLinks } from "../../utils";
import { NavLinkItem } from "../../utils/interfaces";
import NavLink from "./NavLink";
import { useMediaQuery } from "@mui/material";
import useAuthStore from "../../store/auth/auth.store";

const useStyles = makeStyles(
    (theme) => ({
        navbar: {
            display: 'flex',
            width: '100%',
            padding: '20px 16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            [theme.breakpoints.down('md')]: {
                padding: '10px 8px'
            }
        },
        navbarLinksWrapper: {
            display: 'flex'
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
    const tgLinks: NavLinkItem[] = testguyLinks;
    const authenticated = useAuthStore((state) => !!state.token);
    return (
        <>
            {
                authenticated &&
                <div className={classes.navbar}>
                    <div className={classes.navbarLinksWrapper}>
                        {
                            links.map((link) => <NavbarItem link={link} key={`navBarItem${link.url.replace(/\//, '_')}`} />)
                        }
                    </div>
                    <div className={classes.navbarLinksWrapper}>
                        {
                            tgLinks.map((link) => <NavbarItem link={link} key={`navBarItem${link.url.replace(/\//, '_')}`} />)
                        }
                    </div>
                </div>
            }
        </>
    );
}