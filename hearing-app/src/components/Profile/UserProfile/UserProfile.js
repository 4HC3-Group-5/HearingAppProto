import React, {useContext} from "react";
import {AppContext} from "../../../AppProvider";
import "./UserProfile.css";
import {Outlet, useNavigate} from "react-router-dom";

export default function UserProfile() {
    const {user, setUser} = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        setUser({
            name: null,
        });
        navigate('/');
    }

    return (
        <div className="profileSection ">
            <div className="media">
                <img src='https://img.icons8.com/android/512/user.png' className={'userProfileImage'} alt={'avatar'}/>
                <div className="media-body">
                    <h4 className="">{user.name}</h4>
                    <div className="text-secondary">User1@gmail.com</div>
                </div>
            </div>
            <br/>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
            <hr/>
            <div>
                <div className="form-group">
                    <div className="">
                        <label htmlFor="id_username" className="control-label requiredField">
                            Username
                            <span className="asteriskField">*</span>
                        </label>
                        <input type="text" className="form-control" defaultValue={user.name} placeholder="username" aria-label="Password"
                               aria-describedby="basic-addon1"/>
                        <div className="controls">
                            <p id="hint_id_username" className="help-block">Required.
                            150 characters or fewer. Letters, digits and @/./+/-/_ only.</p></div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="">
                            <label htmlFor="id_password" className="control-label requiredField">
                                Password
                                <span className="asteriskField">*</span>
                            </label>
                            <input type="password" className="form-control" defaultValue="password" placeholder="password"/>
                            <div className="controls">
                                <p id="hint_id_username" className="help-block">Required.
                                    64 characters or fewer. Letters, digits and @/./+/-/_ only.</p></div>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="">
                            <label htmlFor="id_email" className="control-label requiredField">
                                Email
                                <span className="asteriskField">*</span>
                            </label>
                            <input type="text" className="form-control" defaultValue="User1@example.com" placeholder="email"/>
                        </div>
                    </div>
                    <button className="btn btn-info" type="submit">Update</button>
                </div>
            </div>
        </div>
    );
}
