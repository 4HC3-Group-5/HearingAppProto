import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function MaskedNoiseTest1() {
  const user = useContext(AppContext).user;

  return (
    <div className="test2-parent">
      <div className="test1-div1">
        <div class="stepper-wrapper">
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">Select a Test</div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">2</div>
            <div class="step-name">Check Environment</div>
          </div>
          <div class="stepper-item active">
            <div class="step-counter">3</div>
            <div class="step-name">Complete Test</div>
          </div>
          <div class="stepper-item">
            <div class="step-counter">4</div>
            <div class="step-name">See Result</div>
          </div>
        </div>
      </div>

      <div className="test1-div2">
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success w-25"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="test1-div3 test-ins">Choose the word you hear...</div>

      <div className="test1-div4 block-container">
        <button className="btn-gradient btn-word">
          <div className="word-container">word1</div>
        </button>

        <button className="btn-gradient btn-word">
          <div className="word-container">word2</div>
        </button>

        <button className="btn-gradient btn-word">
          <div className="word-container">word3</div>
        </button>

        <button className="btn-gradient btn-word">
          <div className="word-container">word4</div>
        </button>
      </div>

      <div className="test1-div5">
        <Link to="../puretone-test2" className="box2 btn-gradient btn-next">
          <div className="hold-container">Next...</div>
        </Link>
      </div>
    </div>
  );
}

export function MaskedNoiseTest2() {
  const user = useContext(AppContext).user;

  return (
    <>
      <h3>Instructions</h3>
      <p id="Instructions">
        This is the Masked Noise Test. You will hear 10 single syllable words
        played in the background with noises on. Choose the correct answer among
        the options given.
      </p>
      <div>
        <button
          className="box3 btn-gradient btn-user"
          data-bs-toggle="logsign"
          data-bs-target="#signup"
        >
          <div className="btn-container">
            <div className="icon-container">
              <span className="material-symbols-outlined user-icon">
                person_add
              </span>
            </div>
            <div className="text-container user-text">word1</div>
          </div>
        </button>
        <button
          className="box3 btn-gradient btn-user"
          data-bs-toggle="logsign"
          data-bs-target="#signup"
        >
          <div className="btn-container">
            <div className="icon-container">
              <span className="material-symbols-outlined user-icon">
                person_add
              </span>
            </div>
            <div className="text-container user-text">word2</div>
          </div>
        </button>
        <button
          className="box3 btn-gradient btn-user"
          data-bs-toggle="logsign"
          data-bs-target="#signup"
        >
          <div className="btn-container">
            <div className="icon-container">
              <span className="material-symbols-outlined user-icon">
                person_add
              </span>
            </div>
            <div className="text-container user-text">word3</div>
          </div>
        </button>
        <button
          className="box3 btn-gradient btn-user"
          data-bs-toggle="logsign"
          data-bs-target="#signup"
          onClick=""
        >
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
