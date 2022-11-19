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
    <>
      <input
        className="nav-btn btn btn-primary"
        type="button"
        value="LOG-IN"
        onClick={toggleLoginPopup}
      />
      {LoginIsOpen && <LoginPopup handleClose={toggleLoginPopup} />}
    </>
  );
}

export function LoginHandler2() {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginIsOpen(!LoginIsOpen);
  };

  return (
    <div id="login">
      <button
        className="box4 btn-gradient btn-user"
        data-bs-toggle="logsign"
        data-bs-target="#login"
        onClick={toggleLoginPopup}
      >
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
    <>
      <input
        className="nav-btn btn btn-success"
        type="button"
        value="SIGN-UP"
        onClick={toggleSignupPopup}
      />
      {SignupIsOpen && <SignupPopup handleClose={toggleSignupPopup} />}
    </>
  );
}

export function SignupHandler2() {
  const [SignupIsOpen, setSignupIsOpen] = useState(false);

  const toggleSignupPopup = () => {
    setSignupIsOpen(!SignupIsOpen);
  };

  return (
    <div>
      <button
        className="btn-gradient btn-user"
        data-bs-toggle="logsign"
        data-bs-target="#signup"
        onClick={toggleSignupPopup}
      >
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
