import React, { useState } from "react";
import "./PickTests.css";
import {Link, NavLink, Outlet} from "react-router-dom";

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
            <Link to="../puretone" class="icons" id="lefti"> 
                    pure tone test
            </Link> 
            <Link to="../masked" class="icons" id="midi"> 
                    masked noise test
            </Link> 
            <Link to="../spatial" class="icons" id="righti"> 
                    spatial audio test
            </Link> 
        </div>
    </div>
    );
}