import {useContext} from "react";
import {AppContext} from "../../AppProvider";
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";

export function MaskedNoiseTest() {
    const user = useContext(AppContext).user;

    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Masked Noise Test.
                You will hear 10 single syllable words played in the background with noises on. Choose the correct answer among the options given.
            </p>
            <div>
                <Link to={`/check`} className="box2 btn-gradient btn-test">
                            <div className="btn-container">
                                <div className="icon-container">
                                    <span class="material-symbols-outlined test-icon">hearing</span>
                                </div>
                                <div className="text-container">Check Environment</div>
                            </div>
                </Link>    
            </div> 
            <div>
                <Link to={`/masked2`} className="box4 btn-gradient btn-test">
                            <div className="btn-container">
                                <div className="icon-container">
                                    <span class="material-symbols-outlined test-icon">hearing</span>
                                </div>
                                <div className="text-container">I am ready, take me to the test</div>
                            </div>
                </Link>
            </div>
            
        </>
    );
}

export function MaskedNoiseTest2() {
    const user = useContext(AppContext).user;

    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Masked Noise Test.
                You will hear 10 single syllable words played in the background with noises on. Choose the correct answer among the options given.
            </p>
            <div>
            <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#signup" >
                <div className="btn-container">
                <div className="icon-container">
                    <span className="material-symbols-outlined user-icon">
                    person_add
                    </span>
                </div>
                <div className="text-container user-text">word1</div>
                </div>
            </button> 
            <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#signup" >
                <div className="btn-container">
                <div className="icon-container">
                    <span className="material-symbols-outlined user-icon">
                    person_add
                    </span>
                </div>
                <div className="text-container user-text">word2</div>
                </div>
            </button> 
            <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#signup" >
                <div className="btn-container">
                <div className="icon-container">
                    <span className="material-symbols-outlined user-icon">
                    person_add
                    </span>
                </div>
                <div className="text-container user-text">word3</div>
                </div>
            </button> 
            <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#signup" onClick="">
                <div className="btn-container">
                <div className="icon-container">
                    <span className="material-symbols-outlined user-icon">
                    person_add
                    </span>
                </div>
                <div className="text-container user-text">word4</div>
                </div>
            </button> 
            </div> 
            
            
        </>
    );
}