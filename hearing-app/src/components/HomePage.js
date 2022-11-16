import React from "react";
import "./HomePage.css";
import { SignupHandler, LoginHandler } from "./Account/Handler";

function MainPage() {
  return (
    <div className="main-page">
      <div className="nav-bar">
        <nav className="nav sticky-top bg-light nav-pills nav-fill">
          <a className="nav-link active" aria-current="page" href="#">
            HOME
          </a>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              TAKING A TEST
            </a>
            <ul className="dropdown-menu nav-pills nav-fill">
              <li>
                <a className="dropdown-item" href="#">
                  Pure Tone Test
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masked Noise Test
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Spatial Audio Test
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-link" href="#">
            HEARING Q&As
          </a>
          {/* <a className="nav-link" href="#">
            History Result
          </a> */}
          <a className="nav-link">
            <SignupHandler />
          </a>
          <a className="nav-link">
            <LoginHandler />
          </a>
        </nav>
      </div>

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
              <span class="material-symbols-outlined user-icon">
                person_add
              </span>
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
    </div>
  );
}

export default MainPage;
