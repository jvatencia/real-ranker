import { makeStyles } from "@mui/styles";
import PageBody from "../../components/commons/PageBody";
import ResponsiveBox from "../../components/utilities/ResponsiveBox";
import { PROFILE_MENU_ITEMS } from "../../utils";

const useStyles = makeStyles(
    (theme) => ({
        profileMenuItem: {
            display: 'flex',
            padding: '20px 16px',
            marginBottom: '10px',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 0px ' + theme.palette.primary.main,
            borderRadius: '5px',
            cursor: 'pointer'
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
            fontSize: '18px',
            fontFamily: 'Montserrat-Bold',
            color: theme.palette.primary.main
        },
    })
);

export default function ProfileMenuPage() {
    const items = PROFILE_MENU_ITEMS;
    const classes = useStyles();

    const getIcon = (item: any) => {
        const MenuIcon = item.icon;

        return <MenuIcon fontSize='large' className={classes.profileMenuIcon} />
    }

    return (
        <ResponsiveBox>
            <PageBody>
                <div>
                    {
                        items.map((item, index) => (
                            <div
                                key={`profileMenuItem${index}`}
                                className={classes.profileMenuItem}
                            >
                                <div className={classes.profileMenuIconWrapper}>
                                    {getIcon(item)}
                                </div>
                                <div className={classes.profileMenuTitle}>
                                    {item.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </PageBody>
        </ResponsiveBox>
    );
}