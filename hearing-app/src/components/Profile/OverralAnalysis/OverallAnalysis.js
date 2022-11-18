import {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import {fakeServer as server} from "../../../data/fake_server";
import {NavLink, Outlet} from "react-router-dom";

import "./OverallAnalysis.css";

export default function OverallAnalysis() {
    const user = useContext(AppContext).user;

    return (
        <div className={'overallAnalysis'}>
            <div className="nav nav-tabs">
                <div className="nav-item">
                    <NavLink to={'/profile/'} className="nav-link">Pure Tone</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/profile/history'} className="nav-link">Masked Noise</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/profile/analysis'} className="nav-link">Spartial Audio</NavLink>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}
