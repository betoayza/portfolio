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
        placeItems: "center"
      }}
    >
      <div
        className={"text-center"}
        style={{
          borderRadius: "0.5rem",
          borderStyle: "double",
          borderColor: "#927d98",
          width: "auto"
        }}
      >
        <h1>Hi I'm Alberto Ayza Web Developer</h1>
        <h3 className={""} style={{textShadow: "1px"}}>Developer & content creator located in Argentina</h3>
      </div>
      <div>
        <NavBarSocial />
      </div>
    </div>
  );
};
