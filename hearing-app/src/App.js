import React, {useState} from "react";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import HomePageUser from "./components/HomePageUser";
import HistoryResultListPage from "./components/HistoryResult/HistoryResultListPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";
import { PickTests } from "./components/HearingTest/PickTests";

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
                path: "/user",
                element: <HomePageUser/>,
            },
            {
                path: "/history",
                element: <HistoryResultListPage/>,
            },
            {
                path: "/test",
                element: <PickTests/>,
            },
        ],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}

export default App;
