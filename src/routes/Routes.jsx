import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AllToys from "../pages/alltoys/AllToys";
import MyToys from "../pages/mytoys/MyToys";
import Blog from "../pages/blog/Blog";
import AddToys from "../pages/addtoys/AddToys";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "alltoys",
        element: <AllToys />,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "addtoys",
        element: (
          <PrivateRoutes>
            <AddToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
