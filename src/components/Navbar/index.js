import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Portfolio</div>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Service</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
