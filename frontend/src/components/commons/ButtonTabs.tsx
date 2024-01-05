import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme: any) => ({
        tabContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        tabButton: {
            padding: '8px 16px',
            border: '1px solid ' + theme.palette.dark.main,
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
                backgroundColor: theme.palette.primary.main,
            }
        },
        tabButtonActive: {
            backgroundColor: theme.palette.primary.main,
        }
    })
);

interface ButtonTab {
    key: string,
    title: string,
}

interface ButtonTabsProps {
    buttons: ButtonTab[];
    activeTab: string;
    setActiveTab: any;
}

export default function ButtonTabs({ buttons, activeTab, setActiveTab }: Readonly<ButtonTabsProps>) {
    const classes = useStyles();

    return (
        <div className={classes.tabContainer}>
            {
                buttons.map((btn: ButtonTab, index: number) => (
                    <div
                        onClick={(e) => setActiveTab(btn.key)}
                        key={`btnTab${btn.key}${index}`}
                        className={`${classes.tabButton} ${activeTab === btn.key ? classes.tabButtonActive : ''}`}>
                        {btn.title}
                    </div>
                ))
            }
        </div>
    );
}