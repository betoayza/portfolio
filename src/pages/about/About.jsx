import React from "react";
import picCV from "../../assets/img/foto3.jpg";

export const About = () => {
  return (
    <div className={""} style={{ minHeight: "90vh", maxWidth: "100%" }}>
      <div
        className={"text-center p-3"}
        style={{
          borderStyle: "double",
          borderRadius: "0.5rem",
          borderColor: "#dcf970",
        }}
      >
        <h2>About:</h2>
        <p>
          I'm a software developer received at{" "}
          <a href="https://inspt.utn.edu.ar/">INSPT</a> at the National
          Technological University (
          <a href="https://www.frba.utn.edu.ar/">UTN</a>) in Buenos Aires,
          Argentina. My strong point is{" "}
          <span className={"ability"}>MERN Stack</span>:{" "}
          <span className={"ability"}>MongoDB</span>,{" "}
          <span className={"ability"}>ExpressJS</span>,{" "}
          <span className={"ability"}>ReactJS</span>,{" "}
          <span className={"ability"}>NodeJS</span>. I handle{" "}
          <span className={"ability"}>LAMP Stack</span> too. I usually handle{" "}
          <span className={"ability"}>Javascript</span>,{" "}
          <span className={"ability"}>HTML</span> and{" "}
          <span className={"ability"}>CSS</span> Frameworks, like{" "}
          <span className={"ability"}>Bootstrap</span>, with{" "}
          <span className={"ability"}>GIT</span> and{" "}
          <span className={"ability"}>API REST</span> in my proyects. In terms
          of POO I often use <span className={"ability"}>Java</span>. I like{" "}
          <span className={"ability"}>Python</span> too. I'm interested in
          everything related to technology, especially web apps. I´m a Junior
          profile, therefore I don't have much job experience, but I'm looking
          for learn constantly, professionally grow and add value in IT
          companies. Thanks.
        </p>
        <div className="container mb-2">
          <img
            src={picCV}
            className="img-fluid rounded-top img-thumbnail"
            alt="Picture CV"
            style={{ height: "18rem", width: "15rem" }}
          />
        </div>
      </div>
    </div>
  );
};
