import React, { useState } from "react";
import "./PickTests.css";

export function PickTests() {
    return (
    <div className="PickTests">
        <label for="file">
        Test progress:
        </label>
        <div class="process" id="myProgress">
            <div id="myBar"></div>
        </div>
        <div class="CheckEnv">
            <a href="CheckEnvironment.html">
                <button>
                    Check Environment
                </button>
            </a>
        </div>
        <div class="iconcolumn">
            <a href="tests/PureToneTest.html">
                <button class="icons" id="lefti"> 
                    pure tone test
                </button> 
            </a>
            <a href="tests/MaskedNoiseTest.html">
                <button class="icons" id="midi" >
                    masked icon test
                </button> 
            </a>
            <a href="tests/SpatialAudioTest.html">
                <button class="icons" id="righti"> 
                    spatial audio test
                </button> 
            </a>
        </div>
    </div>
    );
}