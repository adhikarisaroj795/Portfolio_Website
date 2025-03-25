
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex container">
      <div className="nav-icon">
        <Link to="/">Saroj-adikari</Link>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <Link to={"/"}>_hello</Link>
          </li>
          <li>
            <Link to="about-me">_about-me</Link>
          </li>
          <li>
            <Link to="projects">_projects</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-us">
        <ul>
          <li>
            <Link to="contact-me">_contact-us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
