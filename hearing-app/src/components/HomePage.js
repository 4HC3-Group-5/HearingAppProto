import React from "react";
import "./HomePage.css";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";
import { LoginHandler2, SignupHandler2 } from "./Account/Handler";
import { HistoryResultDetailModal3 } from "./Profile/HistoryResult/HistoryResultDetail/HistoryResultDetailModal";

function MainPage() {
  const user = React.useContext(AppContext).user;
  const userButtons = user.name ? (
    <>
      <Link to={`/profile/history`} className="box5 btn-gradient btn-result">
        <div className="btn-container">
          <div className="icon-container">
            <span class="material-symbols-outlined info-icon">description</span>
          </div>
          <div className="text-container info-text">History Result</div>
        </div>
      </Link>
    </>
  ) : (
    <>
      {/* <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#login">
        <div className="btn-container">
          <div className="icon-container">
            <span className="material-symbols-outlined user-icon">
              person_add
            </span>
          </div>
          <div className="text-container user-text">Sign-up</div>
        </div>
      </button>


      <button className="box4 btn-gradient btn-user">
        <div className="btn-container">
          <div className="icon-container">
            <span className="material-symbols-outlined user-icon">person</span>
          </div>
          <div className="text-container user-text">Log-in</div>
        </div>
      </button> */}
      <div className="box3">
        <SignupHandler2 />
      </div>
      <div className="box4">
        <LoginHandler2 />
      </div>
    </>
  );

  return (
    <div className="main-page">
      <div className="main-menu">
        <Link to={'/knowledge'} className="box1 btn-gradient btn-info">
          <div className="btn-container">
            <div className="icon-container">
              <span className="material-symbols-outlined info-icon">info</span>
            </div>
            <div className="text-container">Hearing Q&As</div>
          </div>
        </Link>

        <Link to={`/test`} className="box2 btn-gradient btn-test">
          <div className="btn-container">
            <div className="icon-container">
              <span className="material-symbols-outlined test-icon">hearing</span>
            </div>
            <div className="text-container">Taking a test</div>
          </div>
        </Link>

        {userButtons}
      </div>
    </div>
  );
}

export default MainPage;
