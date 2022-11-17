import React from "react";

import './Root.css';

import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Root() {
    return (
        <div className={'root'}>
            <div className={'rootUpper'}>
                <Header />
                <div className={'outlet'}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
