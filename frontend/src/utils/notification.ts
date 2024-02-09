import { OptionsObject, SnackbarKey, SnackbarMessage, closeSnackbar, enqueueSnackbar } from "notistack";

const defaultToastOptions: OptionsObject = {
    variant: 'success',
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'top'
    },
    autoHideDuration: 3000
};

export const showToast = (message: SnackbarMessage, options: OptionsObject = defaultToastOptions) => enqueueSnackbar(message, { ...defaultToastOptions, ...options });
export const hideToast = (id: SnackbarKey) => closeSnackbar(id);