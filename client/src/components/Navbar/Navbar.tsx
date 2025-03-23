import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="flex container">
      <div className="nav-icon">
        <a href="">Saroj-adikari</a>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">_hello</a>
          </li>
          <li>
            <a href="">_about-me</a>
          </li>
          <li>
            <a href="">_projects</a>
          </li>
        </ul>
      </nav>
      <div className="contact-us">
        <ul>
          <li>
            <a href="">_contact-us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
