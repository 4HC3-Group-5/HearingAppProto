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
