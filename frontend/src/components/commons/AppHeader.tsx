import { makeStyles } from "@mui/styles";
import thetestguy from "../../assets/thetestguy.png";
import ResponsiveBox from "./ResponsiveBox";

const useStyles = makeStyles((theme: any) => ({
    header: {
        width: '100%',
        height: '80px',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.3s ease-in-out',
        backgroundColor: theme.palette.light.main,
        [theme.breakpoints.down('md')]: {
            height: '56px',
            boxShadow: 'none'
        }
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    realRankerLabel: {
        fontFamily: 'Poppins',
        color: '#222224',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    }
}));

function AppHeader() {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <ResponsiveBox hasPadding>
                <div className={classes.headerContent}>
                    <div>
                        <img src={thetestguy} alt="" />
                    </div>
                    <div className={classes.realRankerLabel}>
                        Real Ranker
                    </div>
                </div>
            </ResponsiveBox>
        </header>
    );
}

export default AppHeader;