import React, {useState} from "react";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import AppProvider from "./AppProvider";

import "./App.css";

import HomePage from "./components/HomePage";
import HistoryResultListPage from "./components/HistoryResult/HistoryResultListPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/history",
                element: <HistoryResultListPage/>,
            },
        ],
    },
]);



function App() {

    return (
        <React.StrictMode>
            <AppProvider>
                <RouterProvider router={router}/>
            </AppProvider>
        </React.StrictMode>
    );
}

export default App;
