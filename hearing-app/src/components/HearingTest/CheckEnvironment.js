import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
export default function CheckEnvironment() {
    const user = useContext(AppContext).user;

    return (
        <div className="SpatialAudio">

                <div className="main-menu">
                    <button className="box1 btn-gradient btn-info">
                        <div className="btn-container">
                            <div className="icon-container">
                                <span class="material-symbols-outlined info-icon">info</span>
                            </div>
                            <div className="text-container">Hearing Q&As</div>
                        </div>
                    </button>

                    <Link to={`/test`} className="box2 btn-gradient btn-test">
                        <div className="btn-container">
                            <div className="icon-container">
                                <span class="material-symbols-outlined test-icon">hearing</span>
                            </div>
                            <div className="text-container">Taking a test</div>
                        </div>
                    </Link>

                </div>
            </div>
    );
}