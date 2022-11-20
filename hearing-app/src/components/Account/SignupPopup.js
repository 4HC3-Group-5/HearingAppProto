import React, {useContext} from "react";
import "./Popup.css";
import {AppContext} from "../../AppProvider";

const SignupPopup = (props) => {
  const setUser = useContext(AppContext).setUser;
  return (
    <div className="popup-box" id="signup">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              defaultValue="User1"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              defaultValue="user1@example.com"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              defaultValue="password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={() => setUser({
                name: "User1",
            })}>
              Sign Up
            </button>
          </div>
          {/* <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;
