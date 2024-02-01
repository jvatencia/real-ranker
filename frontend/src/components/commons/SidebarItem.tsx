import { makeStyles } from "@mui/styles";
import { NavLinkItem } from "../../utils/interfaces";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

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
}
export default function SidebarItem({ item }: SidebarItemProps) {
    const classes = useStyles();

    return (
        <>
            {
                item.items.length === 0 ?
                    <div className={classes.sidebarItem}>
                        <Link to={item.url} className={classes.sidebarItemText}>
                            {item.text}
                        </Link>
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
                                item.items.map((link) => (
                                    <div className={classes.sidebarAccordionItem} key={`navLinkItemAccordionSubItem${link.url.replace(/\//, '_')}`}>
                                        <Link to={link.url} className={classes.sidebarItemText}>
                                            {link.text}
                                        </Link>
                                    </div>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
            }
        </>
    );
}