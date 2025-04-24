import React from "react";
import SidebarDrawer from "./components/SidebarDrawer";
import Navbar from "./components/Navbar";
import Utlisateur from "./components/Utlisateur";
import User from "./components/User";
import Blogs from "./components/Blogs";
import BlogsId from "./components/BlogsId";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./components/Error";
import Loginn from "./components/Auth/Loginn";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Register from "./components/Auth/Register";
import Homeapp from "./components/Home/Homeapp";
export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SidebarDrawer />
      <Outlet />
    </React.Fragment>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "admin",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "utilisateur",
        element: <Utlisateur />,
      },
      {
        path: "user",
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs/:id",
        element: (
          <PrivateRoute>
            <BlogsId />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "loginlogin",
    element: <Loginn />,
  },
  {
    path: "Registre",
    element: <Register />,
  },
  {
    path: "",
    element: <Homeapp />,
  }
]);
