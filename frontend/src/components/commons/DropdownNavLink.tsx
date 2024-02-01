
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tooltip, TooltipProps, Zoom, tooltipClasses } from "@mui/material";
import { NavLinkItem } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/system';

const NavToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.light.main,
        color: theme.palette.primary.main,
        maxWidth: 'none',
        fontSize: 12,
        padding: 10,
    },
}));

interface DropdownNavLinkProps {
    classes: any;
    item: NavLinkItem;
}

const DropdownItems = ({ item, classes }: DropdownNavLinkProps) => {
    return (
        <div className={classes.dropdownWrapper}>
            {
                item.items.map((link: NavLinkItem) => (
                    <div className={classes.dropdownNavItem} key={`navLinkItemSubItem${link.url.replace(/\//, '_')}`}>
                        <Link to={link.url} className={classes.dropdownNavItemText}>
                            {link.text}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default function DropdownNavLink({ classes, item }: Readonly<DropdownNavLinkProps>) {
    const theme = useTheme();
    return (
        <NavToolTip
            id="mouse-over-popover"
            PopperProps={{
                disablePortal: true,
            }}
            placement={'bottom'}
            title={
                <DropdownItems item={item} classes={classes} />
            }
            className={classes.toolTipNavItem}
            sx={{
                backgroundColor: theme.palette.light.main
            }}
        >
            <span className={classes.authLinks}>
                {item.text}
                <ExpandMoreIcon fontSize="small" />
            </span>
        </NavToolTip>
    )
}