import { makeStyles } from "@mui/styles";
import { NavLinkItem } from "../../utils/interfaces";
import { Accordion, AccordionSummary, AccordionDetails, accordionSummaryClasses } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import { OverridableComponent } from "@mui/types";
import { FONT_FAMILY } from "../../utils";

const useStyles = makeStyles(
    (theme: any) => ({
        sidebarItem: {
            display: 'flex',
            alignItems: 'center',
            minHeight: 48,
            padding: '0 16px',
            backgroundColor: '#fff',
            borderBottom: '1px solid rgba(0,0,0,0.4)',
        },
        sidebarAccordion: {
            display: 'flex',
            alignItems: 'center'
        },
        sidebarItemText: {
            width: 'calc(100% - 50px)'
        },
        sidebarItemIcon: {
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        sidebarItemTitle: {
            color: theme.palette.primary.main,
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: 14,
            '&:hover': {
                color: theme.palette.warning.dark
            },
        },
        sidebarAccordionItem: {
            padding: '0 16px',
        }
    })
);

interface SidebarItemProps {
    item: NavLinkItem;
    closeSidebar: any;
}
export default function SidebarItem({ item, closeSidebar }: Readonly<SidebarItemProps>) {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateTo = (url: string) => {
        navigate(url);
        closeSidebar()
    };

    const renderIcon = (icon: OverridableComponent<any> | undefined) => {
        if (!icon) return null;

        const SidebarIcon = icon;

        return <SidebarIcon color='secondary' />
    }


    return (
        <>
            {
                item.items.length === 0 ?
                    <div className={classes.sidebarItem}>

                        <div className={classes.sidebarItemIcon}>
                            {renderIcon(item.icon)}
                        </div>
                        <div onClick={() => navigateTo(item.url)} className={classes.sidebarItemText}>
                            <div className={classes.sidebarItemTitle}>{item.text}</div>
                        </div>
                    </div>
                    :
                    <Accordion>
                        <AccordionSummary
                            sx={{
                                [`& .${accordionSummaryClasses.content}`]: {
                                    margin: 0
                                }
                            }}
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className={classes.sidebarAccordion}>

                                <div className={classes.sidebarItemIcon}>
                                    {renderIcon(item.icon)}
                                </div>
                                <div className={classes.sidebarItemTitle}>{item.text}</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                item.items.map((link: NavLinkItem) => (
                                    <div className={`${classes.sidebarAccordion} ${classes.sidebarAccordionItem}`} key={`navLinkItemAccordionSubItem${link.url.replace(/\//, '_')}`}>
                                        <div className={classes.sidebarItemIcon}>
                                            {renderIcon(link.icon)}
                                        </div>
                                        <div onClick={() => navigateTo(link.url)} className={classes.sidebarItemTitle}>
                                            {link.text}
                                        </div>
                                    </div>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
            }
        </>
    );
}