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
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={appStore}>
      <div id='app'>
        <Header />
        <Outlet context={{isAuthenticated, setIsAuthenticated}}/>
      </div>    
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {  
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <Dashboard />,
        // <ProtectRoutes><Dashboard /></ProtectRoutes>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ProtectRoutes><Contact /></ProtectRoutes>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
