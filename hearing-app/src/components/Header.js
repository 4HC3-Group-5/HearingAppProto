import './Header.css';

import {LoginHandler, SignupHandler} from "./Account/Handler";
import React from "react";
import {AppContext} from "../AppProvider";
import {Link} from "react-router-dom";

export default function Header() {
    const user = React.useContext(AppContext).user;

    const userElement = user.name ?
        (<div className={"nav-item userNavitem"}>
            <Link to={'/profile'} className="nav-link">
                <img src='https://img.icons8.com/android/512/user.png' className={'userIcon bg-light'} alt={'avatar'}/>
                <span>{user.name}</span>
            </Link>
        </div>)
        : (<><a className="nav-link">
            <SignupHandler/>
        </a>
            <a className="nav-link">
                <LoginHandler/>
            </a>
        </>)

    return (<div className="nav-bar">
        <nav className="nav sticky-top bg-light nav-pills nav-fill">
            <Link to={'/'} className="nav-link active" aria-current="page" href="#">
                HOME
            </Link>

            <div className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                >
                    TAKING A TEST
                </a>
                <ul className="dropdown-menu nav-pills nav-fill">
                    <li>
                        <a className="dropdown-item" href="#">
                            Pure Tone Test
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Masked Noise Test
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Spatial Audio Test
                        </a>
                    </li>
                </ul>
            </div>
            <a className="nav-link" href="#">
                HEARING Q&As
            </a>
            {userElement}

        </nav>
    </div>);
}
