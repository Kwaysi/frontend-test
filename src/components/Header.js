import React from "react";
import images from "../assets";

// CSS Files
import "./Header.css";

// Header Component

export default function Header() {
  return (
    <header>
      <div className="left">
        <img src={images["logo.png"]} alt="App Logo" />
      </div>
      <div className="center">
        <img src={images["search.svg"]} alt="Search Icon" />
        <input placeholder="Search" />
      </div>
      <div className="right">
        <ul>
          <li>Support</li>
          <li>FAQs</li>
          <li>
            <img src={images["notifications.svg"]} alt="Profile" />
            <span className="count">8</span>
          </li>
        </ul>
        <div className="profile">
          <p>Hello Jide</p>
          <img src={images["ppic.png"]} alt="Profile" />
        </div>
      </div>
    </header>
  );
}
