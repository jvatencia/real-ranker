import { Backdrop, CircularProgress } from "@mui/material";
import useHelper from "../../store/helpers/helper.store";
import { useShallow } from 'zustand/react/shallow';

export default function OverlayLoader() {
    const loader = useHelper(useShallow((state) => state.showLoader));

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}