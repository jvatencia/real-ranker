import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import OverlayLoader from './components/utilities/OverlayLoader';
import { SnackbarProvider } from 'notistack';
import { ModuleDeclarations } from './utils';



function App() {
  ModuleDeclarations.declare();

  let theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#412a7c',
        dark: '#3b45bb',
        light: '#543f89',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#707AE6',
        dark: '#454da7',
        light: '#a4b3ff',
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
        main: '#fffaf5',
        dark: '#898a8c',
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
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider >
  );
}

export default App;
