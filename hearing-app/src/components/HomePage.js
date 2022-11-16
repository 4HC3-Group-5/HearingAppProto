import React from "react";
import "./HomePage.css";

function MainPage() {
  return (
    <div className="main-menu">
      <button className="box1 btn-gradient btn-info">
        <div className="btn-container">
          <div className="icon-container">
            <span class="material-symbols-outlined info-icon">info</span>
          </div>
          <div className="text-container">Hearing Q&As</div>
        </div>
      </button>

      <button className="box2 btn-gradient btn-test">
        <div className="btn-container">
          <div className="icon-container">
            <span class="material-symbols-outlined test-icon">hearing</span>
          </div>
          <div className="text-container">Taking a test</div>
        </div>
      </button>

      <button className="box3 btn-gradient btn-user">
        <div className="btn-container">
          <div className="icon-container">
            <span class="material-symbols-outlined user-icon">person_add</span>
          </div>
          <div className="text-container user-text">Sign-up</div>
        </div>
      </button>

      <button className="box4 btn-gradient btn-user">
        <div className="btn-container">
          <div className="icon-container">
            <span class="material-symbols-outlined user-icon">person</span>
          </div>
          <div className="text-container user-text">Log-in</div>
        </div>
      </button>
    </div>
  );
}

export default MainPage;
