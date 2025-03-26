import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
}

// Navigation items moved outside the component for better maintainability
const navItems: NavItem[] = [
  { path: "/", label: "_hello" },
  { path: "/about-me", label: "_about-me" },
  { path: "/projects", label: "_projects" },
];

const Navbar: React.FC = () => {
  const location = useLocation(); // Get current path

  return (
    <header className="flex container">
      <div className="nav-icon">
        <Link to="/">Saroj-adikari</Link>
      </div>
      <nav>
        <ul className="flex">
          {navItems.map(({ path, label }) => (
            <li
              key={path}
              className={location.pathname === path ? "active" : ""}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contact-us">
        <ul>
          <li className={location.pathname === "/contact-me" ? "active" : ""}>
            <Link to="/contact-me">_contact-us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
