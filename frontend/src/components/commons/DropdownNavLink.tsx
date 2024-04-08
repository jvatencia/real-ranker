
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tooltip, TooltipProps, tooltipClasses, Slide, ClickAwayListener } from "@mui/material";
import { NavLinkItem } from '../../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { useState } from 'react';
import { OverridableComponent } from "@mui/types";

const NavToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.light.main,
        color: theme.palette.dark.main,
        maxWidth: 'none',
        fontSize: 12,
        padding: 10,
        position: 'relative',
        marginTop: '0 !important',
        boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.light.main,
        boxShadow: 'none'
    },
}));

interface DropdownNavLinkProps {
    classes: any;
    item: NavLinkItem;
}

interface DropdownItemsProps extends DropdownNavLinkProps {
    handleClose: any;
}

const renderIcon = (icon: OverridableComponent<any> | undefined) => {
    if (!icon) return null;

    const SidebarIcon = icon;

    return <SidebarIcon color='dark' />
}

const DropdownItems = ({ item, classes, handleClose }: DropdownItemsProps) => {
    const navigate = useNavigate();

    const navigateTo = (url: string) => {
        handleClose();
        navigate(url);
    }
    return (
        <div className={classes.dropdownWrapper}
            onMouseLeave={handleClose}>
            {
                item.items.map((link: NavLinkItem) => (
                    <div onClick={() => navigateTo(link.url)} className={classes.dropdownNavItem} key={`navLinkItemSubItem${link.url.replace(/\//, '_')}`}>
                        <div className={classes.dropdownNavItemIcon}>
                            {renderIcon(link.icon)}
                        </div>
                        <div className={classes.dropdownNavItemText}>
                            {link.text}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default function DropdownNavLink({ classes, item }: Readonly<DropdownNavLinkProps>) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={classes.authLinks}>
                <NavToolTip
                    id="mouse-over-popover"
                    PopperProps={{
                        disablePortal: false,
                    }}
                    placement={'bottom'}
                    title={
                        <DropdownItems handleClose={handleClose} item={item} classes={classes} />
                    }
                    disableFocusListener
                    TransitionComponent={Slide}
                    className={classes.toolTipNavItem}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, 20]
                                    }
                                }
                            ]
                        }
                    }}
                    sx={{ zIndex: 1044 }}
                    onMouseEnter={handleOpen}
                    open={open}
                >
                    <span>
                        {item.text}
                        <ExpandMoreIcon fontSize="small" />
                    </span>
                </NavToolTip>
            </div>
        </ClickAwayListener>
    )
}