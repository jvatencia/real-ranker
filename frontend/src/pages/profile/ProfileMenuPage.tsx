import { makeStyles } from "@mui/styles";
import PageBody from "../../components/commons/PageBody";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { FONT_FAMILY, PROFILE_MENU_ITEMS, devices } from "../../utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const useStyles = makeStyles(
    (theme) => ({
        profileWrapper: {
            display: 'flex'
        },
        profileSidebarWrapper: {
            padding: '10px 16px',
            borderRight: '1px solid rgba(0,0,0,0.3)',
            width: '280px',
            height: '60vh',
            paddingTop: '40px'
        },
        profileMenuItem: {
            display: 'flex',
            padding: '20px 16px',
            marginBottom: '10px',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 0px ' + theme.palette.primary.main,
            borderRadius: '5px',
            cursor: 'pointer'
        },
        profileMenuSidebarItem: {
            width: '100%',
            height: '50px',
            textAlign: 'right'
        },
        profileMenuIconWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px',
            height: '50px',
            width: '50px'
        },
        profileMenuIcon: {
            color: theme.palette.primary.main
        },
        profileMenuTitle: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
            height: '50px',
            width: 'calc(100% - 60px)',
            fontSize: '20px',
            fontFamily: FONT_FAMILY.CHOCOLATE_BOLD,
            color: theme.palette.primary.main
        },
        profileMenuSidebarTitle: {
            fontSize: '20px',
            fontFamily: FONT_FAMILY.CHOCOLATE_BOLD,
            color: theme.palette.dark.light
        },
        tabActive: {
            color: theme.palette.secondary.main
        }
    })
);

export default function ProfileMenuPage() {
    const items = PROFILE_MENU_ITEMS;
    const classes = useStyles();
    const matches = useMediaQuery(devices.tablet)
    let [searchParams, setSearchParams] = useSearchParams();

    const [activeTab, setActiveTab] = useState<string>('');

    const getIcon = (item: any) => {
        const MenuIcon = item.icon;

        return <MenuIcon fontSize='large' className={classes.profileMenuIcon} />
    }

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (!matches) { // if tablet or larger
            if (tab) {
                const tabExists = items.map((item) => item.key).includes(tab);

                if (tabExists)
                    setTab(tab);
                else
                    setTab(items[0].key);
            } else {
                setTab(items[0].key);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('[profile-menu] activeTab', activeTab);
        setTab(activeTab || searchParams.get('tab')!);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    const setTab = (tab: string) => {
        if (activeTab !== tab)
            setActiveTab(tab);

        setSearchParams({ tab });
    }

    const onItemClick = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <ResponsiveBox>
            <PageBody>
                {
                    matches ?
                        items.map((item, index) => (
                            <div
                                key={`profileMenuItem${index}`}
                                className={classes.profileMenuItem}
                                onClick={(e) => onItemClick(item.key)}
                            >
                                <div className={classes.profileMenuIconWrapper}>
                                    {getIcon(item)}
                                </div>
                                <div className={classes.profileMenuTitle}>
                                    {item.title}
                                </div>
                            </div>
                        ))
                        :
                        <div className={classes.profileWrapper}>
                            <div className={classes.profileSidebarWrapper}>
                                {
                                    items.map((item, index) => (
                                        <div
                                            key={`profileMenuItem${index}`}
                                            className={classes.profileMenuSidebarItem}
                                            onClick={(e) => onItemClick(item.key)}
                                        >
                                            <span className={`${classes.profileMenuSidebarTitle} ${item.key === activeTab ? classes.tabActive : ''}`}>
                                                {item.title}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </PageBody>
        </ResponsiveBox>
    );
}