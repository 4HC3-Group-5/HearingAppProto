import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { Outlet } from "react-router-dom";
import { Link , useNavigate } from "react-router-dom";
import { HistoryResultDetailModal2 } from "../Profile/HistoryResult/HistoryResultDetail/HistoryResultDetailModal";

export function MaskedCheck() {
  return (
    <div className="parent">
      <Link to="../masked1" className="div4 btn-gradient btn-start">
        <div className="icon-container">
          <span class="material-symbols-outlined icon">play_arrow</span>
        </div>
        <div className="text-container start-text">Start!</div>
      </Link>

      <div className="div1">
        <div class="stepper-wrapper">
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">Select a Test</div>
          </div>
          <div class="stepper-item active">
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

      <div className="check2">
        <Link to="../masked-check" className="btn-gradient btn-check1">
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
        <Link to="../masked-check" className="btn-gradient btn-check2">
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
  );
}
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
        <Link to="../masked2" className="box2 btn-gradient btn-next">
          <div className="hold-container">Next...</div>
        </Link>
      </div>
    </div>
  );
}
export function MaskedNoiseTest2() {
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
            class="progress-bar progress-bar-striped bg-success w-50"
            role="progressbar"
            aria-valuenow="50"
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
        <Link to="../masked3" className="box2 btn-gradient btn-next">
          <div className="hold-container">Next...</div>
        </Link>
      </div>
    </div>
  );
}export function MaskedNoiseTest3() {
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
            class="progress-bar progress-bar-striped bg-success w-75"
            role="progressbar"
            aria-valuenow="75"
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
        <Link to="../masked4" className="box2 btn-gradient btn-next">
          <div className="hold-container">Next...</div>
        </Link>
      </div>
    </div>
  );
}export function MaskedNoiseTest4() {
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
            class="progress-bar progress-bar-striped bg-success w-100"
            role="progressbar"
            aria-valuenow="100"
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
        <Link to="../maskedend" className="box2 btn-gradient btn-next">
          <div className="hold-container">Next...</div>
        </Link>
      </div>
    </div>
  );
}
export function MaskedEnd() {
  const navigate = useNavigate();
  return (
    <div className="test1-parent">
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
          <div class="stepper-item completed">
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
            class="progress-bar progress-bar-striped bg-success w-100"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="test1-div3 test-ins">
        Well Done! You have finished your test, please press the blue button below to check result. 
      </div>

      <div className="test1-div4">
        <button className="box2 btn-gradient btn-result2" data-bs-toggle="modal" data-bs-target="#test2Modal"
                onClick={() => {
                  navigate(`/maskedfinish`)
                }}>
          <div className="hold-container">See My Result</div>
        </button>
        <HistoryResultDetailModal2/>
      </div>
    </div>

    // <h3>Instructions</h3>
    // <p id="Instructions">This is the Pure Tone Test.</p>
    // <div>
    //   <Link to={`/check`} className="box2 btn-gradient btn-test">
    //     <div className="btn-container">
    //       <div className="icon-container">
    //         <span class="material-symbols-outlined test-icon">hearing</span>
    //       </div>
    //       <div className="text-container">Something will happen!</div>
    //     </div>
    //   </Link>
    // </div>
  );
}

export function MaskedResult() {
  const navigate = useNavigate();
  return (
    <div className="test1-parent">
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
          <div class="stepper-item completed">
            <div class="step-counter">3</div>
            <div class="step-name">Complete Test</div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">4</div>
            <div class="step-name">See Result</div>
          </div>
        </div>
      </div>

      <div className="test1-div2">
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success w-100"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="test1-div3 test-ins">
        You have finished your tests. Click the blue button down to take another test
      </div>

      <div className="test1-div4">
      <Link to="../" className="box2 btn-gradient btn-result2">
          <div className="hold-container">HomePage</div>
        </Link>
      </div>
    </div>

    // <h3>Instructions</h3>
    // <p id="Instructions">This is the Pure Tone Test.</p>
    // <div>
    //   <Link to={`/check`} className="box2 btn-gradient btn-test">
    //     <div className="btn-container">
    //       <div className="icon-container">
    //         <span class="material-symbols-outlined test-icon">hearing</span>
    //       </div>
    //       <div className="text-container">Something will happen!</div>
    //     </div>
    //   </Link>
    // </div>
  );
              }
