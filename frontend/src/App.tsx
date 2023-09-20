import {useState} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Datapage from "./pages/Datapage";
import Formpage from "./pages/Formpage";
import "./index.css";
import PageNotFound from "./components/error/PageNotFound";
import useToken from './components/commons/Token';
import Login from './components/commons/Login';
function App() {

  const {token, setToken} = useToken();
  if (!token) {
    return (
      <Login setToken={setToken} />
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <PageNotFound />,
      children: [
        {
          path: "homepage",
          element: <Homepage />,
        },
        {
          path: "datapage",
          element: <Datapage />,
        },
        {
          path: "form",
          element: <Formpage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
