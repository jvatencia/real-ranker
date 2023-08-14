import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Datapage from "./pages/Datapage";
import Formpage from "./pages/Formpage";
import "./index.css";
import PageNotFound from "./components/error/PageNotFound";

function App() {
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
