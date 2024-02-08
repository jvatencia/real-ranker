import { OptionsObject, SnackbarMessage, closeSnackbar, enqueueSnackbar } from "notistack";

const defaultToastOptions: OptionsObject = {
    variant: 'success',
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'top'
    },
    autoHideDuration: 1000
};

export const showToast = (message: SnackbarMessage, options: OptionsObject = defaultToastOptions) => enqueueSnackbar(message, options);
export const hideToast = closeSnackbar;