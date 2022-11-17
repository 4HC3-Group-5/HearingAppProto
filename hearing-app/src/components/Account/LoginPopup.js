import React, {useContext} from "react";
import "./Popup.css";
import {AppContext} from "../../AppProvider";

const LoginPopup = (props) => {
    const setUser = useContext(AppContext).setUser;

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
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            setUser({
                                name: "test"
                            })
                        }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
