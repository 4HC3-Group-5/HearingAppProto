import {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import {Outlet} from "react-router-dom";

export default function OverallAnalysis() {
    const user = useContext(AppContext).user;

    return (
        <>
            <p>OverallAnalysis</p>
        </>
    );
}
