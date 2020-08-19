import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Portfolio 3.0
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio3.0"
              className={
                window.location.pathname === "/portfolio3.0" || window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              MyProjects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          {/* ------ */}
          <li className="nav-item">
             <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://github.com/MikelTafalla"><FontAwesomeIcon icon={faGithub}/></a>
          </li>

          <li className="nav-item">
             <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mikel-rodriguez-villar/"><FontAwesomeIcon icon={faLinkedinIn}/></a> 
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
