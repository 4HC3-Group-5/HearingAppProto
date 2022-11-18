import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Outlet} from "react-router-dom";

export default function MaskedNoiseTest() {
    const user = useContext(AppContext).user;

    return (
        <>
            <p>You will hear 10 single syllable words played in the background with noises on. Choose the correct answer among the options given.</p>
        </>
    );
}