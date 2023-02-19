import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarSocial = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink
          to="https://github.com/betoayza"
          className="nav-link active"
          style={{ color: "white", fontSize: "40px" }}
          aria-current="page"
        >
          <i className="bi-github"></i>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="https://www.linkedin.com/in/alberto-ayza-838023137/"
          className="nav-link active"
          style={{ color: "white", fontSize: "40px" }}
          aria-current="page"
        >
          <i
            className="bi-linkedin"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </NavLink>
      </li>
    </ul>
  );
};
