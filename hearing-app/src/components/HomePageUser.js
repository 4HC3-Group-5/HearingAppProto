import React from "react";
import "./HomePage.css";
import { Outlet, Link } from "react-router-dom";

function MainPageUser() {
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
          <a className="nav-link" href="#">
            HISTORY RESULTS
          </a>

          <a className="nav-link" href="#">
            Hi! Username
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
        <Link to={`/test`} className="box2 btn-gradient btn-test">
          <div className="btn-container">
            <div className="icon-container">
              <span class="material-symbols-outlined test-icon">
                hearing
              </span>
            </div>
            <div className="text-container info-text">Taking a test</div>
          </div>
        </Link>


        <Link to={`/history`} className="box5 btn-gradient btn-result">
          <div className="btn-container">
            <div className="icon-container">
              <span class="material-symbols-outlined info-icon">
                description
              </span>
            </div>
            <div className="text-container info-text">History Result</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainPageUser;
