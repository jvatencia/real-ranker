import { styled } from "@mui/system";

const AppCustomCard = styled('div')(({ theme }) => ({
    padding: '10px 16px',
    border: '1px solid ' + theme.palette.primary.main,
    boxShadow: '0px 3px 3px ' + theme.palette.primary.main
}));

export default AppCustomCard;