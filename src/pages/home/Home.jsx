import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavBarSocial } from "../../components/container/NavBarSocial";
import { Visits } from "../../components/pure/Visits";

export const Home = () => {
  const [visits, setVisits] = useState(null);

  return (
    <div
      className={""}
      style={{
        minHeight: "95vh",
        display: "grid",
        alignContent: "space-between",
        placeItems: "center",
      }}
    >
      <div
        className={"text-center"}
        style={{
          borderRadius: "0.5rem",
          borderStyle: "double",
          borderColor: "#927d98",
          width: "auto",
        }}
      >
        <h1>Hi! I'm Alberto Ayza (betodev)</h1>
        <h3 className={""} style={{ textShadow: "1px" }}>
          Soft & Web Developer, Pentester & content creator located in Argentina
        </h3>
      </div>
      <div>
        {/* <Visits visits={visits} setVisits={setVisits} /> */}
        <NavBarSocial />
      </div>
    </div>
  );
};
