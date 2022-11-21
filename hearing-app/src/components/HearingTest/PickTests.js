import React, { useState } from "react";
import "./PickTests.css";
import "./progress.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export function PickTests() {
  return (
    <div className="test-parent">
      <div className="test-div1">
        <div class="stepper-wrapper">
          <div class="stepper-item active">
            <div class="step-counter">1</div>
            <div class="step-name">Select a Test</div>
          </div>
          <div class="stepper-item">
            <div class="step-counter">2</div>
            <div class="step-name">Check Environment</div>
          </div>
          <div class="stepper-item">
            <div class="step-counter">3</div>
            <div class="step-name">Complete Test</div>
          </div>
          <div class="stepper-item">
            <div class="step-counter">4</div>
            <div class="step-name">See Result</div>
          </div>
        </div>
      </div>

      {/* <div class="CheckEnv">
            <a href="CheckEnvironment.html">
                <button>
                    Check Environment
                </button>
            </a>
        </div> */}

      <div className="test-div2">
        <Link to="../puretone-check" className="btn-gradient btn-test1">
          <div className="btn-container1">
            <div className="icon-container">
              <span class="material-symbols-outlined icon">music_note</span>
            </div>
            <div className="text-container">
              {/* <Link to="../puretone" class="icons" id="lefti">
                Pure Tone Test
              </Link> */}
              Pure Tone Test
            </div>
            <div className="des-container des1">
              Sweep across all frequencies with different volumes, test whether
              you hear them, plot audiograms for both left and right ear.
            </div>
          </div>
        </Link>
      </div>

      <div className="test-div3">
        {/* <Link to="../masked" class="icons" id="midi">
          masked noise test
        </Link> */}
        <Link to="../masked-check" className="btn-gradient btn-test2">
          <div className="btn-container1">
            <div className="icon-container">
              <span class="material-symbols-outlined icon">
                auto_detect_voice
              </span>
            </div>
            <div className="text-container">Masked Noise Test</div>
            <div className="des-container des2">
              Play 10 single syllable words in background noise, choose the
              words you hear from given options.
            </div>
          </div>
        </Link>
      </div>

      <div className="test-div4">
        {/* <Link to="../spatial" class="icons" id="righti">
          spatial audio test
        </Link> */}
        <Link to="../spatial-check" className="btn-gradient btn-test3">
          <div className="btn-container1">
            <div className="icon-container">
              <span class="material-symbols-outlined icon">spatial_audio</span>
            </div>
            <div className="text-container">Spatial Audio Test</div>
            <div className="des-container des3">
              Play voice coming from different directions with background noise,
              render a 3D sphere to indicate your sound perception level.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
