import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

export function LoginHandler() {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginIsOpen(!LoginIsOpen);
  };

  return (
    <div>
      <input type="button" value="LOG-IN" onClick={toggleLoginPopup} />
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
      <input type="button" value="SIGN-UP" onClick={toggleSignupPopup} />
      {SignupIsOpen && <SignupPopup handleClose={toggleSignupPopup} />}
    </div>
  );
}
