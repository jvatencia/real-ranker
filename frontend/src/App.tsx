import { UserContext } from './app-context/userContext';
import { UserContextProvider } from './app-context/userContextProvider';
import { createTheme, PaletteColorOptions, StyledEngineProvider, Theme, ThemeProvider } from '@mui/material';
import AppRouter from './router/router';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';


declare module '@mui/material/styles' {
  interface Palette {
    light: PaletteColorOptions;
    dark: PaletteColorOptions;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }
}


declare module '@mui/styles' {
  interface DefaultTheme extends Theme {
    breakpoints: any
  }
}

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#a4b3ff',
        dark: '#909ee0',
        light: '#adbbff',
        contrastText: '#000000'
      },
      secondary: {
        main: '#707ae6',
        dark: '#636bca',
        light: '#7e87e9',
        contrastText: '#000000'
      },
      success: {
        main: '#84e1a9',
        dark: '#74c695',
        light: '#90e4b2',
        contrastText: '#000000'
      },
      warning: {
        main: '#fce8ab',
        dark: '#decc96',
        light: '#fceab3',
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

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider >
  );
}

export default App;
