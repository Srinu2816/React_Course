import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import SS from "./components/SS";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectRoutes from "../Utils/ProtectRoutes";
import React, { useState } from "react";

const AppLayout = () => {
  return (
    <div id='app'>
      <Header />
      <Outlet />
    </div>
  );
};

const [isAuthenticated, setIsAuthenticated] = useState(false);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login isAuthenticated={setIsAuthenticated} />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectRoutes isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectRoutes>
        ),
      },
      {
        path: "/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sample",
        element: <SS />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
