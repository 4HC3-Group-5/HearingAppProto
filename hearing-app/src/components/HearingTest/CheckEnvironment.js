import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
export default function CheckEnvironment() {
    const user = useContext(AppContext).user;

    return (
        <div className="SpatialAudio">
                <h3>Instructions</h3>
                <p>This is the page to set your devices.</p>

                <div className="main-menu">
                    <Link to={`/test`} className="box2 btn-gradient btn-test">
                        <div className="btn-container">
                            <div className="icon-container">
                                <span class="material-symbols-outlined test-icon">hearing</span>
                            </div>
                            <div className="text-container">Click the button if you hear the sound.</div>
                        </div>
                    </Link>
                </div>
                <div>

                    <Link to={`/test`} className="box2 btn-gradient btn-test">
                        <div className="btn-container">
                            <div className="icon-container">
                                <span class="material-symbols-outlined test-icon">hearing</span>
                            </div>
                            <div className="text-container">Start the test</div>
                        </div>
                    </Link>

                </div>
            </div>
    );
}