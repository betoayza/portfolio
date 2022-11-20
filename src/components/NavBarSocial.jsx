import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarSocial = () => {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a
          class="nav-link active"
          aria-current="page"
          href="https://github.com/betoayza"
        >
          <i
            className="bi-github"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.linkedin.com/in/alberto-ayza-838023137/"
        >
          <i
            className="bi-linkedin"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </a>
      </li>
    </ul>
  );
};