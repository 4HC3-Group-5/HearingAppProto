import {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import {Outlet} from "react-router-dom";

export default function UserProfile() {
    const user = useContext(AppContext).user;

    return (
        <>
            <p>Voice will come from different directions with background noises, render a 3D sphere to indicate sound per ception level</p>
        </>
    );
}