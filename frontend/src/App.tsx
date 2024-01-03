import { useState, useContext } from 'react';
import { UserContext } from './app-context/userContext';
import { createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider, Form } from "react-router-dom";
import ProtectedRoute from './components/commons/ProtectedRoute';
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import CreateAccount from "./pages/CreateAccount";
import Datapage from "./pages/Datapage";
import Formpage from "./pages/Formpage";
import "./index.css";
import PageNotFound from "./components/error/PageNotFound";
import useToken from './components/commons/Token';
import Login from './components/commons/Login';
import { Home } from '@mui/icons-material';
import { UserContextProvider } from './app-context/userContextProvider';
import { createTheme, PaletteColorOptions, ThemeProvider } from '@mui/material';


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

function App() {

  // const {token, setToken} = useToken();
  const { token, updateState } = useContext(UserContext);
  const setToken = (t: string) => { updateState({ token: t }); localStorage.setItem('user-token', t); };
  console.log(token);
  // if (token==='aa') {
  //   return (
  //     <Login setToken={setToken} redirectTo={'/homepage'}/>
  //   );
  // }

  // console.log(token);
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     // errorElement: <PageNotFound />,
  //     children: [
  //       {
  //         path: "homepage",
  //         element: <Homepage />,
  //       },
  //       {
  //         path: "datapage",
  //         element: <Datapage />,
  //       },
  //       {
  //         path: "form",
  //         element: <Formpage />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <PageNotFound />,
  //   },
  // ]);

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        // main: '#0070ba'
        main: '#a4b3ff'
      },
      secondary: {
        main: '#707ae6'
      },
      success: {
        main: '#84e1a9'
      },
      warning: {
        // main: '#FADE88'
        main: '#fce8ab'
      },
      error: {
        main: '#f28291'
      },
      light: {
        main: '#f4f5f8'
      },
      dark: {
        main: '#222224'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}

      <UserContextProvider>
        <BrowserRouter basename={'/'} >


          <Routes>
            <Route element={<Layout />}>

              <Route path='login' element={
                <Login setToken={setToken} redirectTo={'/form'} />
              } />
              <Route path="" element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              } />
              <Route path='dataview' element={
                <ProtectedRoute>
                  <Datapage />
                </ProtectedRoute>
              } />
              <Route path='form' element={
                <ProtectedRoute>
                  <Formpage />
                </ProtectedRoute>
              } />
              <Route path='create_account' element={
                <ProtectedRoute>
                  <CreateAccount />
                </ProtectedRoute>
              } />
              <Route path='*' element={
                <Login setToken={setToken} redirectTo={'/form'} />
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
