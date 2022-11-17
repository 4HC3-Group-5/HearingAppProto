import {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import {Outlet} from "react-router-dom";

export default function UserProfile() {
    const user = useContext(AppContext).user;

    return (
        <>
            <p>User profile</p>
        </>
    );
}
