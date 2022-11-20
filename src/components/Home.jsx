import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavBarSocial } from "./NavBarSocial";

export const Home = () => {
  return (
    <div
      className={""}
      style={{
        minHeight: "95vh",
        display: "grid",
        alignContent: "space-between",
      }}
    >
      <div className={"text-center"}>
        <h1>Hi I'm Alberto Ayza Web Developer</h1>
        <h3>Developer & content creator located in Argentina</h3>
      </div>
      <div>
        <NavBarSocial />
      </div>
    </div>
  );
};
