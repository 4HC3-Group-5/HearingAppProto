import "./ProfileRoot.css";

import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";


export default function ProfileRoot() {
    const user = useContext(AppContext).user;
    const navigate = useNavigate();

    if (!user.name) {
        // navigate()
        // todo: redirect to login page
    }

    return (
        <div className={'profileRoot'}>
            <div className={'leftSidebar nav nav-pills'}>
                <NavLink to={'/profile/'} className="nav-link">User Profile</NavLink>
                <NavLink to={'/profile/history'} className="nav-link">Test History</NavLink>
                <NavLink to={'/profile/analysis'} className="nav-link">Overall
                    Analysis</NavLink>
            </div>

            <div className={'rightPanel'}>
                <Outlet/>
            </div>
        </div>
    );
}
