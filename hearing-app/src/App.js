import React from "react";

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

import AppProvider from "./AppProvider";
import {CookiesProvider} from 'react-cookie';

import HomePage from "./components/HomePage";
import HistoryResultListPage
    from "./components/Profile/HistoryResult/HistoryResultList/HistoryResultListPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";
import ProfileRoot from "./components/Profile/ProfileRoot";
import UserProfile from "./components/Profile/UserProfile/UserProfile";
import OverallAnalysis from "./components/Profile/OverralAnalysis/OverallAnalysis";
import {PickTests} from "./components/HearingTest/PickTests";
import {
    PureToneCheck,
    PureToneTest1,
    PureToneTest2,
    PureToneTest3,
    PureToneTest4,
    PureToneTestEnd,
    PureToneTestResult
} from "./components/HearingTest/PureTone";
import {
    SpatialCheck, SpatialEnd, SpatialResult, SpatialTest1, SpatialTest2, SpatialTest3, SpatialTest4
} from "./components/HearingTest/SpatialAudio";
import {
    MaskedCheck,
    MaskedEnd,
    MaskedNoiseTest1,
    MaskedNoiseTest2,
    MaskedNoiseTest3,
    MaskedNoiseTest4,
    MaskedResult,
} from "./components/HearingTest/MaskedNoise";
import CheckEnvironment from "./components/HearingTest/CheckEnvironment";
import PureToneAnalysisView
    from "./components/Profile/OverralAnalysis/AnalysisViews/PureToneAnalysisView";
import MaskedNoiseAnalysisView
    from "./components/Profile/OverralAnalysis/AnalysisViews/MaskedNoiseAnalysisView";
import SpatialAudioAnalysisView
    from "./components/Profile/OverralAnalysis/AnalysisViews/SpatialAudioAnalysisView";
import HistoryResult from "./components/Profile/HistoryResult/HistoryResult";
import {
    HistoryResultDetailInfo,
    HistoryResultDetailInfo1,
} from "./components/Profile/HistoryResult/HistoryResultDetail/HistoryResultDetailInfo";
import ArticleAlready from "./components/Knowledge/Articles/ArticleAlready";
import KnowledgeRoot from "./components/Knowledge/KnowledgeRoot";
import ArticleHearingLoss from "./components/Knowledge/Articles/ArticleHearingLoss";
import ArticleNoise from "./components/Knowledge/Articles/ArticleNoise";
import ArticleSignsSymptoms from "./components/Knowledge/Articles/ArticleSignsSymptoms";

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
                path: "test",
                element: <PickTests/>,
            },

            {
                path: "puretone-check",
                element: <PureToneCheck/>,
            },
            {
                path: "puretone-test1",
                element: <PureToneTest1/>,
            },
            {
                path: "puretone-test2",
                element: <PureToneTest2/>,
            },
            {
                path: "puretone-test3",
                element: <PureToneTest3/>,
            },
            {
                path: "puretone-test4",
                element: <PureToneTest4/>,
            },
            {
                path: "puretone-test-end",
                element: <PureToneTestEnd/>,
            },
            {
                path: "puretone-test-result",
                element: <PureToneTestResult/>,
            },
            {
                path: "masked-check",
                element: <MaskedCheck/>,
            },
            {
                path: "masked1",
                element: <MaskedNoiseTest1/>,
            },
            {
                path: "masked2",
                element: <MaskedNoiseTest2/>,
            },
            {
                path: "masked3",
                element: <MaskedNoiseTest3/>,
            },
            {
                path: "masked4",
                element: <MaskedNoiseTest4/>,
            },
            {
                path: "maskedend",
                element: <MaskedEnd/>,
            },
            {
                path: "maskedfinish",
                element: <MaskedResult/>,
            },
            {
                path: "spatial-check",
                element: <SpatialCheck/>,
            },
            {
                path: "spatial-test1",
                element: <SpatialTest1/>,
            },
            {
                path: "spatial-test2",
                element: <SpatialTest2/>,
            },
            {
                path: "spatial-test3",
                element: <SpatialTest3/>,
            },
            {
                path: "spatial-test4",
                element: <SpatialTest4/>,
            },
            {
                path: "spatial-test-end",
                element: <SpatialEnd/>,
            },
            {
                path: "spatial-test-finish",
                element: <SpatialResult/>,
            },
            {
                path: "check",
                element: <CheckEnvironment/>,
            },
            {
                path: "knowledge",
                element: <KnowledgeRoot/>,
                children: [
                    {
                        path: "already",
                        element: <ArticleAlready/>,
                    },
                    {
                        path: "",
                        element: <ArticleHearingLoss/>,
                    },
                    {
                        path: "noise",
                        element: <ArticleNoise/>,
                    },
                    {
                        path: "signs-symptoms",
                        element: <ArticleSignsSymptoms/>,
                    },
                ],
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
                        element: <HistoryResult/>,
                        children: [
                            {
                                path: "",
                                element: <HistoryResultListPage/>,
                            },
                            {
                                path: ":id",
                                element: <HistoryResultDetailInfo/>,
                            },
                        ],
                    },
                    {
                        path: "analysis",
                        element: <OverallAnalysis/>,
                        children: [
                            {
                                path: "",
                                element: <PureToneAnalysisView/>,
                            },
                            {
                                path: "maskednoise",
                                element: <MaskedNoiseAnalysisView/>,
                            },
                            {
                                path: "spatialaudio",
                                element: <SpatialAudioAnalysisView/>,
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
            <CookiesProvider>
                <AppProvider>
                    <RouterProvider router={router}/>
                </AppProvider>
            </CookiesProvider>
        </React.StrictMode>
    );
}

export default App;
