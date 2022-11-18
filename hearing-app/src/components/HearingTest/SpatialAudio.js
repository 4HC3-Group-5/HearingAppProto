import React, { useState } from "react";
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import { HistoryResultDetailModal3 } from "../Profile/HistoryResult/HistoryResultDetailModal";

export function SpatialAudioTest() {
    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Spatial Audio Test.
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
                <Link to={`/spatial2`} className="box4 btn-gradient btn-test">
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

export function SpatialAudioTest2() {
    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Spatial Audio Test.
            </p>
            <div>
                <Link to={`/check`} className="box2 btn-gradient btn-test">
                            <div className="btn-container">
                                <div className="icon-container">
                                    <span class="material-symbols-outlined test-icon">hearing</span>
                                </div>
                                <div className="text-container">Something will happen!</div>
                            </div>
                </Link>    
            </div> 
            <button className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#test3Modal">Test is done! see your result.
            </button>

            <HistoryResultDetailModal3/>
            
        </>
    );
}