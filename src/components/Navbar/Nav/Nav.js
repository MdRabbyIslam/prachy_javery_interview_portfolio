import React, { useState } from "react";
import "./Nav.css";
import { navLinks } from "../../../Data/Data";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="nav-items">
      <h1 class="nav-brand">Dev Rabby</h1>
      <div
        className="menu-icon"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul>
        {navLinks.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
