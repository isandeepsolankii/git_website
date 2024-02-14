import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home" className="nav-text nav-home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-text nav-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#project" className="nav-text nav-project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-text nav-resume"
                  href="Resume/Sandeep_resume.pdf"
                  download="Sandeep_resume.pdf"
                >
                  Resume
                </a>
              </li>
              <li className=" nav-item">
                <a href="#contact" className="red-text contact_button">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
