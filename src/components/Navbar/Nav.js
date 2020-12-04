import React, { useState } from "react";
import "./Nav.css";
import { navLinks } from "../Data/Data";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? " active nav-bar" : "nav-bar"}>
      <div className="nav-items">
        <h1 className="nav-brand">Dev Rabby</h1>
        <div
          className="menu-icon"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <a
            className="nav-links"
            href=" https://drive.google.com/uc?export=download&id=1iitBnnCxxxOUTIjXjtfho2WJZSlmhDJC"
          >
            <button type="button" className="resume-btn">
              Resume
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
