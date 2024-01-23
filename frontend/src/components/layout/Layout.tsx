import AppHeader from "../commons/AppHeader";
import { makeStyles } from "@mui/styles";
import WelcomeHeader from "../commons/WelcomeHeader";

const useStyles = makeStyles(
  (theme: any) => ({
    app: {
      backgroundColor: theme.palette.light.light,
      minHeight: '100vh',
      width: '100%',
      transition: '0.3s ease-in-out',
      [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.light.main,
      }
    },
    main: {
      minHeight: 'calc(100vh - 80px)'
    }
  })
)

const ChildHeader = ({ unauthMode }: any) => {
  if (unauthMode)
    return <WelcomeHeader></WelcomeHeader>;


  return <AppHeader></AppHeader>
}
const Layout = ({ children, unauthMode }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <ChildHeader unauthMode={unauthMode ?? false} />

      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;