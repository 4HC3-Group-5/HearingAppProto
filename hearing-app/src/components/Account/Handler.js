import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import "../HomePage.css";

export function LoginHandler() {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginIsOpen(!LoginIsOpen);
  };

  return (
    <div>
      <input
        className="nav-btn"
        type="button"
        value="LOG-IN"
        onClick={toggleLoginPopup}
      />
      {LoginIsOpen && <LoginPopup handleClose={toggleLoginPopup} />}
    </div>
  );
}

export function LoginHandler2() {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginIsOpen(!LoginIsOpen);
  };

  return (
    <div id="login">
      <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#login" onClick={toggleLoginPopup}>
        <div className="btn-container">
          <div className="icon-container">
            <span className="material-symbols-outlined user-icon">
              person_add
            </span>
          </div>
          <div className="text-container user-text">Log-in</div>
        </div>
      </button>
      
      {LoginIsOpen && <LoginPopup handleClose={toggleLoginPopup} />}
    </div>
  );
}

export function SignupHandler() {
  const [SignupIsOpen, setSignupIsOpen] = useState(false);

  const toggleSignupPopup = () => {
    setSignupIsOpen(!SignupIsOpen);
  };

  return (
    <div>
      <input
        className="nav-btn"
        type="button"
        value="SIGN-UP"
        onClick={toggleSignupPopup}
      />
      {SignupIsOpen && <SignupPopup handleClose={toggleSignupPopup} />}
    </div>
  );
}

export function SignupHandler2() {
  const [SignupIsOpen, setSignupIsOpen] = useState(false);

  const toggleSignupPopup = () => {
    setSignupIsOpen(!SignupIsOpen);
  };

  return (
    <div>
      <button className="box3 btn-gradient btn-user" data-bs-toggle="logsign" data-bs-target="#signup" onClick={toggleSignupPopup}>
        <div className="btn-container">
          <div className="icon-container">
            <span className="material-symbols-outlined user-icon">
              person_add
            </span>
          </div>
          <div className="text-container user-text">Sign-up</div>
        </div>
      </button>
      {SignupIsOpen && <SignupPopup handleClose={toggleSignupPopup} />}
    </div>
  );
}
