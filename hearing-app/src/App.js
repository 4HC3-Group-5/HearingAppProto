import React from "react";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

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
import { SpatialAudioTest } from "./components/HearingTest/SpatialAudio";
import MaskedNoiseTest from "./components/HearingTest/MaskedNoise";
import CheckEnvironment from "./components/HearingTest/CheckEnvironment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "test",
        element: <PickTests />,
      },

      {
        path: "puretone",
        element: <PureToneTest />,
      },
      {
        path: "masked",
        element: <MaskedNoiseTest />,
      },
      {
        path: "spatial",
        element: <SpatialAudioTest />,
      },
      {
        path: "check",
        element: <CheckEnvironment />,
      },
      {
        path: "profile",
        element: <ProfileRoot />,
        children: [
          {
            path: "",
            element: <UserProfile />,
          },
          {
            path: "history",
            element: <HistoryResultListPage />,
          },
          {
            path: "analysis",
            element: <OverallAnalysis />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
