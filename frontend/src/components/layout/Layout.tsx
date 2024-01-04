import { Outlet } from "react-router-dom";
import AppHeader from "../commons/AppHeader";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  (theme: any) => ({
    app: {
      backgroundColor: theme.palette.light.light,
      height: '100vh',
      width: '100%',
      transition: '0.3s ease-in-out',
      [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.light.main,
      }
    }
  })
)
const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <AppHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;