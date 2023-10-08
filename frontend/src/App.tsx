import {useState, useContext} from 'react';
import { UserContext } from './app-context/userContext';
import { createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider, Form } from "react-router-dom";
import ProtectedRoute from './components/commons/ProtectedRoute';
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Datapage from "./pages/Datapage";
import Formpage from "./pages/Formpage";
import "./index.css";
import PageNotFound from "./components/error/PageNotFound";
import useToken from './components/commons/Token';
import Login from './components/commons/Login';
import { Home } from '@mui/icons-material';
import { UserContextProvider } from './app-context/userContextProvider';
function App() {

  // const {token, setToken} = useToken();
  const {token, updateState} = useContext(UserContext);
  const setToken = (t: string) => { updateState({token: t}); localStorage.setItem('user-token', t);};
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

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <UserContextProvider>
    <BrowserRouter  basename={'/'} >


    <Routes>
      <Route element={<Layout />}>

        <Route path='login' element={
          <Login setToken={setToken} redirectTo={'/form'}/>
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
        <Route path='*' element={
          <Login setToken={setToken} redirectTo={'/form'}/>
          } />
      </Route>
    </Routes>
</BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
