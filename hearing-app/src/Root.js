import React from "react";
import {Outlet, RouterProvider} from "react-router-dom";
import Footer from "./components/Footer";

export default function Root() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}
