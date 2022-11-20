import React, { useContext } from "react";
import "./Popup.css";
import { AppContext } from "../../AppProvider";
import { Link, NavLink, Outlet } from "react-router-dom";

const LoginPopup = (props) => {
  const setUser = useContext(AppContext).setUser;

  return (
    <div className="popup-box" id="login">
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
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                setUser({
                  name: "User1",
                });
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
