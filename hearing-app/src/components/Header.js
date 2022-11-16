import React from "react";
import { SignupHandler, LoginHandler } from "./Account/Handler";

function Header() {
  return (
    <nav className="nav sticky-top bg-light nav-pills nav-fill">
      <a className="nav-link active" aria-current="page" href="#">
        HOME
      </a>

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
      {/* <a className="nav-link" href="#">
        History Result
      </a> */}
      <a className="nav-link">
        <SignupHandler />
      </a>
      <a className="nav-link">
        <LoginHandler />
      </a>
    </nav>
  );
}

export default Header;
