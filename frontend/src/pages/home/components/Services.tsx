import { makeStyles } from "@mui/styles"
import { PUBLIC_SERVICES, FONT_FAMILY } from "../../../utils";
import ResponsiveBox from "../../../components/utilities/ResponsiveBox";
import { Button } from "@mui/material";

const useStyles = makeStyles(
    (theme: any) => ({
        servicesWrapper: {
            width: '100%',
            height: 'calc(100vh - 80px)',
            backgroundColor: theme.palette.light.main,
            overflowX: 'hidden',
            padding: '16px 24px',
            [theme.breakpoints.down('md')]: {
                height: 'auto'
            }
        },
        sectionHeader: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontWeight: 'bold',
            fontSize: '48px',
            [theme.breakpoints.down('md')]: {
                fontSize: '36px'
            }
        },
        servicesCards: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(5),
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
            }
        },
        serviceCard: {
            padding: '16px 24px',
            border: '1px solid rgba(0,0,0,0.1)',
            width: '33%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: '500px',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                height: 'auto',
                marginBottom: '20px'
            }
        },
        serviceIconWrapper: {
            margin: '20px 0px'
        },
        serviceIcon: {
            width: '128px'
        },
        serviceCardTitle: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '15px'
        },
        serviceCardDesc: {
            fontFamily: FONT_FAMILY.DEFAULT,
            fontSize: '16px',
            color: theme.palette.dark.light,
            marginBottom: '15px'
        }

    })
);

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    const classes = useStyles();
    return (
        <div className={classes.serviceCard}>
            <div className={classes.serviceIconWrapper}>
                <img src={icon} alt="" />
            </div>
            <div className={classes.serviceCardTitle}>{title}</div>
            <div className={classes.serviceCardDesc}>{description}</div>

            <Button variant="outlined" color="primary">Learn More</Button>
        </div>
    );
}

export default function Services() {
    const classes = useStyles();
    const services: ServiceCardProps[] = PUBLIC_SERVICES;

    return (
        <div className={classes.servicesWrapper}>
            <ResponsiveBox>
                <h2 className={classes.sectionHeader}>Our Services</h2>
                <div className={classes.servicesCards}>
                    {
                        services.map((service) => (
                            <ServiceCard {...service} key={`serviceCardPublic${service.title.replace(/ /g, '')}`} />
                        ))
                    }
                </div>
            </ResponsiveBox>
        </div>
    );
}