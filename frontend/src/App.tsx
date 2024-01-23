import { createTheme, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import OverlayLoader from './components/utilities/OverlayLoader';
import { SnackbarProvider } from 'notistack';
import CustomModal from './components/utilities/CustomModal';


declare module '@mui/material/styles' {
  interface Palette {
    light: Palette['primary'];
    dark: Palette['primary'];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    light?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
  }
}


declare module '@mui/styles' {
  interface DefaultTheme extends Theme {
    breakpoints: any
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

function App() {

  let theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#412a7c',
        dark: '#39256d',
        light: '#543f89',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#53359f',
        dark: '#492f8c',
        light: '#6449a9',
        contrastText: '#ffffff'
      },
      success: {
        main: '#84e1a9',
        dark: '#74c695',
        light: '#90e4b2',
        contrastText: '#000000'
      },
      warning: {
        main: '#f8cf40',
        dark: '#dab638',
        light: '#f9d453',
        contrastText: '#000000'
      },
      error: {
        main: '#f28291',
        dark: '#d57280',
        light: '#f38f9c',
        contrastText: '#000000'
      },
      light: {
        main: '#f4f5f8',
        dark: '#d7d8da',
        light: '#f5f6f9',
        contrastText: '#000000'
      },
      dark: {
        main: '#222224',
        dark: '#1e1e20',
        light: '#38383a',
        contrastText: '#ffffff'
      }
    },
  });

  theme = createTheme(theme, {
    palette: {
      light: theme.palette.augmentColor({
        color: {
          main: '#f4f5f8',
          dark: '#d7d8da',
          light: '#f5f6f9',
          contrastText: '#000000'
        },
        name: 'light',
      }),
      dark: theme.palette.augmentColor({
        color: {
          main: '#222224',
          dark: '#1e1e20',
          light: '#38383a',
          contrastText: '#ffffff'
        },
        name: 'dark',
      }),
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={5}>
          <OverlayLoader />
          <CustomModal />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider >
  );
}

export default App;
