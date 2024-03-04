import { makeStyles } from "@mui/styles";
import { NavLinkItem } from "../../utils/interfaces";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(
    (theme: any) => ({
        sidebarItem: {
            display: 'flex',
            alignItems: 'center',
            minHeight: 48,
            padding: '0 16px',
            backgroundColor: '#fff',
            borderBottom: '1px solid rgba(0,0,0,0.2)',
            "&:first-child": {
                borderTop: '1px solid rgba(0,0,0,0.2)'
            }
        },
        sidebarItemText: {
            color: theme.palette.primary.main,
            fontFamily: 'Poppins',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: 14,
            '&:hover': {
                color: theme.palette.warning.dark
            },
        },
        sidebarAccordionItem: {
            padding: '0 16px',
            marginBottom: '15px'
        }
    })
);

interface SidebarItemProps {
    item: NavLinkItem;
    closeSidebar: any;
}
export default function SidebarItem({ item, closeSidebar }: SidebarItemProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateTo = (url: string) => {
        navigate(url);
        closeSidebar()
    };

    return (
        <>
            {
                item.items.length === 0 ?
                    <div className={classes.sidebarItem}>
                        <div onClick={() => navigateTo(item.url)} className={classes.sidebarItemText}>
                            {item.text}
                        </div>
                    </div>
                    :
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className={classes.sidebarItemText}>{item.text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                item.items.map((link: NavLinkItem) => (
                                    <div className={classes.sidebarAccordionItem} key={`navLinkItemAccordionSubItem${link.url.replace(/\//, '_')}`}>
                                        <div onClick={() => navigateTo(link.url)} className={classes.sidebarItemText}>
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