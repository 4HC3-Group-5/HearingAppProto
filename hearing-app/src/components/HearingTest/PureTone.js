import React, { useState } from "react";
import "./Check.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export function PureToneTest() {
  return (
    <div className="parent">
      <div className="div4 btn-gradient btn-start">
        <div className="icon-container">
          <span class="material-symbols-outlined icon">play_arrow</span>
        </div>
        <div className="text-container start-text">Start!</div>
      </div>

      <div className="div1">
        <label for="file">Test progress:</label>
        <div class="process" id="myProgress">
          <div id="myBar"></div>
        </div>
      </div>

      <div className="check2">
        <Link to="../puretone" className="btn-gradient btn-check1">
          <div className="btn-container1">
            <div className="icon-container">
              <span class="material-symbols-outlined icon">headphones</span>
            </div>
            <div className="text-container">Connect to your headphones...</div>
            <div className="check-container">
              <span class="material-symbols-outlined check-icon">
                check_circle
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="check3">
        <Link to="../masked" className="btn-gradient btn-check2">
          <div className="btn-container1">
            <div className="icon-container">
              <span class="material-symbols-outlined icon">laptop_windows</span>
            </div>
            <div className="text-container">Find a quiet place...</div>
            <div className="check-container">
              <span class="material-symbols-outlined check-icon">
                check_circle
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>

    // <>
    //     <h3>
    //         Instructions
    //     </h3>
    //     <p id="Instructions">
    //         This is the Pure Tone Test.
    //     </p>
    //     <div>
    //         <Link to={`/check`} className="box2 btn-gradient btn-test">
    //                     <div className="btn-container">
    //                         <div className="icon-container">
    //                             <span class="material-symbols-outlined test-icon">hearing</span>
    //                         </div>
    //                         <div className="text-container">Check Environment</div>
    //                     </div>
    //         </Link>
    //     </div>
    //     <div>
    //         <Link to={`/puretone2`} className="box4 btn-gradient btn-test">
    //                     <div className="btn-container">
    //                         <div className="icon-container">
    //                             <span class="material-symbols-outlined test-icon">hearing</span>
    //                         </div>
    //                         <div className="text-container">I am ready, take me to the test</div>
    //                     </div>
    //         </Link>
    //     </div>

    // </>
  );
}

export function PureToneTest2() {
  return (
    <>
      <h3>Instructions</h3>
      <p id="Instructions">This is the Pure Tone Test.</p>
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
