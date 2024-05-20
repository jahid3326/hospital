import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Master from "../layout/Master";
import Dashboard from "../modules/Dashboard";
import Error500 from "../modules/Error500";
import Login from "../modules/auth/Login";
import NewInvoice from "../modules/NewInvoice";
import Error400 from "../modules/Error404";
import PrintLayoutConfiguration from "../modules/PrintLayoutConfiguration";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/',
        element: <Master/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/invoice/new',
                element: <NewInvoice/>
            },
            {
                path: '/settings/print-layout-configuration',
                element: <PrintLayoutConfiguration/>
            },
            {
                path: '/error-500',
                element: <Error500/>
            },
            {
              path: "*",
              element: <Error400/>,
            }
        ]
    }
])


export default Router;
