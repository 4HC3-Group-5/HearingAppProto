import React from "react";
import "./HomePage.css";

function MainPage() {
  return (
    <div className="main-menu">
      <button className="box1">Hearing Q&As</button>

      <button className="box2">
        <i class="fa-solid fa-headphones"></i>Taking a test
      </button>

      <button className="box3">Sign-up</button>
      <button className="box4">Log-in</button>
    </div>
  );
}

export default MainPage;
