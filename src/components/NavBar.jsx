import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <img src={""} style={{ width: 50, height: 50 }} alt="Logo" /> */}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={`/`}>
                {({ isActive }) => (
                  <a
                    className={isActive ? "nav-link active" : "nav-link active"}
                  >
                    Home
                  </a>
                )}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proyects
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/shopping-cart-siete-oro-frontend/"
                  >
                    Siete de Oro
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/car-workshop-frontend/"
                  >
                    Super Car Workshop
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/countries-cities/"
                  >
                    Countries Cities
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/drum-machine/"
                  >
                    Drum Machine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/song-finder/"
                  >
                    Song Finder
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/markdown-previewer/"
                  >
                    Markdown Previewer
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/random-quote-machine/"
                  >
                    Random Quote Machine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://betoayza.github.io/dog-finder-2/"
                  >
                    Dog Finder
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to={`/about`}>
                {({ isActive }) => (
                  <a className={isActive ? "nav-link" : "nav-link"}>About</a>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/contact`}>
                {({ isActive }) => (
                  <a className={isActive ? "nav-link" : "nav-link"}>Contact</a>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
