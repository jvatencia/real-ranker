import { styled } from "@mui/system";
import { FONT_FAMILY } from "../../utils";

const AppPageTitle = styled('div')(({ theme }) => ({
    color: theme.palette.dark.main,
    fontSize: '24px',
    fontWeight: 700,
    fontFamily: FONT_FAMILY.POPPINS_BOLD,
    [theme.breakpoints.up('md')]: {
        fontSize: '30px',
    }
}));

export default AppPageTitle;