import React, {useState} from "react";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import AppProvider from "./AppProvider";

import HomePage from "./components/HomePage";
import HistoryResultListPage from "./components/Profile/HistoryResult/HistoryResultListPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";
import ProfileRoot from "./components/Profile/ProfileRoot";
import UserProfile from "./components/Profile/UserProfile/UserProfile";
import OverallAnalysis from "./components/Profile/OverralAnalysis/OverallAnalysis";
import { PickTests } from "./components/HearingTest/PickTests";
import PureToneTest from "./components/HearingTest/PureTone";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path:"test",
                element: <PickTests/>,
                children: [
                    {
                        path:"puretone",
                        element: <PureToneTest/>,
                    },
                ]
            },
            {
                path: "profile",
                element: <ProfileRoot/>,
                children: [
                    {
                        path: "",
                        element: <UserProfile/>,
                    },
                    {
                        path: "history",
                        element: <HistoryResultListPage/>,
                    },
                    {
                        path: "analysis",
                        element: <OverallAnalysis/>,
                    }
                ]
            }
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
