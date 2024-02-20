
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import { NavLinkItem } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/system';
import { useState } from 'react';

const NavToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.light.main,
        color: theme.palette.primary.main,
        maxWidth: 'none',
        fontSize: 12,
        padding: 10,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.light.main
    },
    [`& .${tooltipClasses.popper}`]: {
        border: '1px solid rgba(0,0,0,0.3)'
    }
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
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <NavToolTip
            id="mouse-over-popover"
            PopperProps={{
                disablePortal: false,
            }}
            placement={'bottom'}
            title={
                <DropdownItems item={item} classes={classes} />
            }
            className={classes.toolTipNavItem}
            sx={{
                backgroundColor: theme.palette.light.main
            }}
            onMouseEnter={handleOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            <span className={classes.authLinks}>
                {item.text}
                <ExpandMoreIcon fontSize="small" />
            </span>
        </NavToolTip>
    )
}