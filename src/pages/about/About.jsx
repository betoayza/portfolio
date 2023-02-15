import React from "react";

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
          Argentina. My strong point is: Fullstack with MERN: Javascript,
          ReactJS, NodeJS, ExpressJS and MongoDB, although I handle LAMP too. I
          usually handle HTML, CSS and CSS Frameworks, like Bootstrap, with GIT
          and API REST in my proyects. In terms of POO I often use Java I'm
          interested in everything related to technology, especially web apps.
          I´m a Junior profile, therefore I don't have much job experience, but
          I'm looking for learn constantly, professionally grow and add value in
          IT companies. Thanks.
        </p>
      </div>
    </div>
  );
};
