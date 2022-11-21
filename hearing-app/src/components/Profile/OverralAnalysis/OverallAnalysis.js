import {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import {fakeServer as server} from "../../../data/fake_server";
import {NavLink, Outlet} from "react-router-dom";

import "./OverallAnalysis.css";

export default function OverallAnalysis() {
    const user = useContext(AppContext).user;

    return (
        <div className={'overallAnalysis'}>
            <div className="nav nav-tabs analysisNav">
                <div className="nav-item">
                    <NavLink to={'/profile/analysis'} end={true} className="nav-link">Pure Tone</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/profile/analysis/maskednoise'} className="nav-link">Masked Noise</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/profile/analysis/spatialaudio'} className="nav-link">Spatial Audio</NavLink>
                </div>
            </div>
            <div className={"analysisView"}>
                <Outlet/>
            </div>
        </div>
    );
}
