import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { devices } from "../../utils/breakpoints";

const useStyles = makeStyles(
    (theme: any) => ({
        tabContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        tabButton: {
            padding: '8px 16px',
            border: '1px solid ' + theme.palette.primary.main,
            color: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: '0.3s linear',
            userSelect: 'none',
            boxShadow: '0px 2px 0px ' + theme.palette.primary.main,
            "&:not(:first-child)": {
                borderRightWidth: 0,
            },
            "&:first-child": {
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
                borderRightWidth: 0,
            },
            "&:last-child": {
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
                borderRightWidth: '1px'
            },
            "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.light.main,
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '14px'
            }
        },
        tabButtonActive: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main + ' !important',
        }
    })
);

interface ButtonTab {
    key: string,
    title: string,
    icon?: React.ReactNode
}

interface ButtonTabsProps {
    buttons: ButtonTab[];
    activeTab: string;
    setActiveTab: any;
}

export default function ButtonTabs({ buttons, activeTab, setActiveTab }: Readonly<ButtonTabsProps>) {
    const classes = useStyles();
    const matches = useMediaQuery(devices.tablet)
    const handleTitle = (button: ButtonTab) => {
        if (button.icon !== undefined) {
            return !matches && button.title;
        }

        return button.title;
    }

    return (
        <div className={classes.tabContainer}>
            {
                buttons.map((btn: ButtonTab, index: number) => (
                    <div
                        onClick={(e) => setActiveTab(btn.key)}
                        key={`btnTab${btn.key}${index}`}
                        className={`${classes.tabButton} ${activeTab === btn.key ? classes.tabButtonActive : ''}`}>
                        {btn.icon || null} {handleTitle(btn)}
                    </div>
                ))
            }
        </div>
    );
}