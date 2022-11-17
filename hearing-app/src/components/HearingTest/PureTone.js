import React, { useState } from "react";
import "./PickTests.css";
import {Link, NavLink, Outlet} from "react-router-dom";

export default function PureToneTest() {

    return (
        <div className="PureToneTest">
            <p>Sweep across all frequencies with different volumes. Plot audiograms for both left and right ear.</p>
            <p>Hint: You can plot the audiograms for both ears on the same graph</p>
        </div>
    );
}