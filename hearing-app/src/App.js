import React from "react";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import AppProvider from "./AppProvider";

import HomePage from "./components/HomePage";
import HistoryResultListPage from "./components/Profile/HistoryResult/HistoryResultList/HistoryResultListPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";
import ProfileRoot from "./components/Profile/ProfileRoot";
import UserProfile from "./components/Profile/UserProfile/UserProfile";
import OverallAnalysis from "./components/Profile/OverralAnalysis/OverallAnalysis";
import { PickTests } from "./components/HearingTest/PickTests";
import { PureToneCheck, PureToneTest1, PureToneTest2 , PureToneTest3, PureToneTest4 } from "./components/HearingTest/PureTone";
import {
  SpatialAudioTest,
  SpatialAudioTest2,
} from "./components/HearingTest/SpatialAudio";
import {
  MaskedNoiseTest,
  MaskedNoiseTest2,
} from "./components/HearingTest/MaskedNoise";
import CheckEnvironment from "./components/HearingTest/CheckEnvironment";
import PureToneAnalysisView from "./components/Profile/OverralAnalysis/AnalysisViews/PureToneAnalysisView";
import MaskedNoiseAnalysisView from "./components/Profile/OverralAnalysis/AnalysisViews/MaskedNoiseAnalysisView";
import SpartialAudioAnalysisView from "./components/Profile/OverralAnalysis/AnalysisViews/SpartialAudioAnalysisView";
import HistoryResult from "./components/Profile/HistoryResult/HistoryResult";
import {
  HistoryResultDetailInfo,
  HistoryResultDetailInfo1,
} from "./components/Profile/HistoryResult/HistoryResultDetail/HistoryResultDetailInfo";
import AlreadyPage from "./components/Knowledge/Already";

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
        path: "puretone-check",
        element: <PureToneCheck />,
      },
      {
        path: "puretone-test1",
        element: <PureToneTest1 />,
      },
      {
        path: "puretone-test2",
        element: <PureToneTest2 />,
      },
      {
        path: "puretone-test3",
        element: <PureToneTest3 />,
      },
      {
        path: "puretone-test4",
        element: <PureToneTest4 />,
      },
      {
        path: "masked",
        element: <MaskedNoiseTest />,
      },
      {
        path: "masked2",
        element: <MaskedNoiseTest2 />,
      },
      {
        path: "spatial",
        element: <SpatialAudioTest />,
      },
      {
        path: "spatial2",
        element: <SpatialAudioTest2 />,
      },
      {
        path: "check",
        element: <CheckEnvironment />,
      },
      {
        path: "knowledge",
        children:[
          {
            path: "already",
            element: <AlreadyPage/>,
          },
          {
            path: "hearing-loss",
            element: <AlreadyPage/>,
          },
          {
            path: "noise",
            element: <AlreadyPage/>,
          },
          {
            path: "signs-symptoms",
            element: <AlreadyPage/>,
          }
        ]
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
            element: <HistoryResult />,
            children: [
              {
                path: "",
                element: <HistoryResultListPage />,
              },
              {
                path: ":id",
                element: <HistoryResultDetailInfo />,
              },
            ],
          },
          {
            path: "analysis",
            element: <OverallAnalysis />,
            children: [
              {
                path: "",
                element: <PureToneAnalysisView />,
              },
              {
                path: "maskednoise",
                element: <MaskedNoiseAnalysisView />,
              },
              {
                path: "spartialaudio",
                element: <SpartialAudioAnalysisView />,
              },
            ],
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
