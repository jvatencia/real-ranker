import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(
    (theme: any) => ({
        pageBody: {
            width: '100%',
            marginTop: '50px',
            backgroundColor: theme.palette.light.main,
            padding: '20px 16px',
            borderRadius: '5px',
            fontFamily: 'Poppins',
            [theme.breakpoints.down('md')]: {
                padding: '10px 8px',
                marginTop: '25px',

            }
        }
    })
);

export default function PageBody({ children }: any) {
    const classes = useStyles();

    return (
        <div className={classes.pageBody}>
            {children}
        </div>
    )
}