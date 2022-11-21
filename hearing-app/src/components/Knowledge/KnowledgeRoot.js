import "./KnowledgeRoot.css";

import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";


export default function KnowledgeRoot() {
    const user = useContext(AppContext).user;
    const navigate = useNavigate();

    if (!user.name) {
        // navigate()
        // todo: redirect to login page
    }

    return (
        <div className={'knowledgeRoot'}>
            <div className={'leftSidebar nav nav-pills'}>
                <NavLink to={'/knowledge'} end={true} className="nav-link">What is Hearing Loss</NavLink>
                <NavLink to={'/knowledge/signs-symptoms'} className="nav-link">Signs & Symptoms</NavLink>
                <NavLink to={'/knowledge/noise'} className="nav-link">Loud Noise</NavLink>
                <NavLink to={'/knowledge/already'} className="nav-link">Already Have Hearing Loss</NavLink>
            </div>

            <div className={'rightPanel'}>
                <Outlet/>
            </div>
        </div>
    );
}
