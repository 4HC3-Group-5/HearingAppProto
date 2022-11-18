import React, { useState } from "react";
import "./PickTests.css";
import {Link, NavLink, Outlet} from "react-router-dom";

export function PureToneTest() {

    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Pure Tone Test.
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
                <Link to={`/puretone2`} className="box4 btn-gradient btn-test">
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
};

export function PureToneTest2() {

    return (
        <>
            <h3>
                Instructions
            </h3>
            <p id="Instructions">
                This is the Pure Tone Test.
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
            
            
        </>
    );
}