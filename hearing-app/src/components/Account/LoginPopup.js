import React from "react";
import "./Popup.css";
import { Outlet, Link } from "react-router-dom";

const LoginPopup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form>
          <h3>Log In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <Link to={`/user`} type="submit" className="btn btn-primary">
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
