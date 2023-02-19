import React from "react";
import { NavLink } from "react-router-dom";

const inactiveStyle = {
  textDecoration: "none",
  color: "#adff2f",
};

const activeStyle = {
  textDecoration: "none",
  color: "#ff8243",
};

const siteStyle = {
  color: "#7df9ff",
  fontStyle: "italic",
  fontWeight: "bold",
};

let activeClassName = "pastelOrange";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          className={"navbar-brand"}
        >
          <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
            My Portfolio
          </span>
        </NavLink>
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
              <NavLink
                to={`/`}
                className={"greenYellow nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="#"
                className={`nav-link dropdown-toggle ${(isActive) => {
                  isActive && activeClassName;
                }}`}
                style={inactiveStyle}
                data-bs-toggle="dropdown" // importante
              >
                Proyects
              </NavLink>

              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-right text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink
                    href="https://betoayza.github.io/shopping-cart-siete-oro-frontend/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Siete de Oro E-commerce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/car-workshop-frontend/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Super Car Workshop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/countries-cities/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Countries Cities
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/drum-machine/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Drum Machine
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/song-finder/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Song Finder
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/markdown-previewer/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Markdown Previewer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/random-quote-machine/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Random Quotes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/dog-finder-2/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Dog Finder
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/pokedex/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Pokedex ES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/music-band/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Music Band
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/js-calculator/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    JS Calcultator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/to-do-list/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    To Do List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/notes/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Notes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/contacts-list/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Contacts List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/tasks-manager/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Tasks Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/netflix-clone/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Netflix Clone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://betoayza.github.io/weather-app/"
                    className={"dropdown-item nav-link"}
                    style={siteStyle}
                  >
                    Weather App
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/about`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/contact`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
