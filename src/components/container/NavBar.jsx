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
                    className={
                      isActive
                        ? "nav-link pastelOrange"
                        : "nav-link pastelOrange"
                    }
                  >
                    Home
                  </a>
                )}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle pastelOrange"
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
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/shopping-cart-siete-oro-frontend/"
                  >
                    Siete de Oro E-commerce
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/car-workshop-frontend/"
                  >
                    Super Car Workshop
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/countries-cities/"
                  >
                    Countries Cities
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/drum-machine/"
                  >
                    Drum Machine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/song-finder/"
                  >
                    Song Finder
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/markdown-previewer/"
                  >
                    Markdown Previewer
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/random-quote-machine/"
                  >
                    Random Quote Machine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/dog-finder-2/"
                  >
                    Dog Finder
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/pokedex/"
                  >
                    Pokedex ES
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/music-band/"
                  >
                    Music Band
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/js-calculator/"
                  >
                    JS Calculator
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/to-do-list/"
                  >
                    To Do List
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/notes/"
                  >
                    Notes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/contacts-list/"
                  >
                    Contacts List
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/tasks-manager/"
                  >
                    Tasks Manager
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/netflix-clone/"
                  >
                    Netflix Clone
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item greenYellow"
                    href="https://betoayza.github.io/weather-app/"
                  >
                    Weather App
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to={`/about`}>
                {({ isActive }) => (
                  <a
                    className={
                      isActive
                        ? "nav-link pastelOrange"
                        : "nav-link pastelOrange"
                    }
                  >
                    About
                  </a>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/contact`}>
                {({ isActive }) => (
                  <a
                    className={
                      isActive
                        ? "nav-link pastelOrange"
                        : "nav-link pastelOrange"
                    }
                  >
                    Contact
                  </a>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
