import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";

export default function MaskedNoiseTest() {
    const user = useContext(AppContext).user;

    return (
        <>
            <p>You will hear 10 single syllable words played in the background with noises on. Choose the correct answer among the options given.</p>
            <Link to={`/check`} className="box2 btn-gradient btn-test">
                        <div className="btn-container">
                            <div className="icon-container">
                                <span class="material-symbols-outlined test-icon">hearing</span>
                            </div>
                            <div className="text-container">Taking a test</div>
                        </div>
            </Link>
        </>
    );
}