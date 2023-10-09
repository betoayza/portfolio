import React from "react";
import picCV from "../../assets/img/photo-cv-black-bg.png";

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
          Greetings! My name is Alberto Ayza, and I recently graduated from the{" "}
          <a href="https://inspt.utn.edu.ar/">INSPT</a> -{" "}
          <a href="https://www.frba.utn.edu.ar/">
            National Technological University
          </a>{" "}
          in Buenos Aires, Argentina with a degree in{" "}
          <a href="https://inspt.utn.edu.ar/carreras/informatica_aplicada/">
            Higher Technician in Applied Computing
          </a>{" "}
          in 2022. As a junior systems technician and web developer, I have
          gained experience in full-stack development using the{" "}
          <span className="ability">MERN</span> stack. I am highly proficient in{" "}
          <span className="ability">JavaScript</span>,{" "}
          <span className="ability">ReactJS</span>,{" "}
          <span className="ability">NodeJS</span>,{" "}
          <span className="ability">ExpressJS</span>, and{" "}
          <span className="ability">MongoDB</span>. Additionally, I am skilled
          in <span className="ability">HTML</span>,{" "}
          <span className="ability">CSS</span>, and CSS frameworks such as{" "}
          <span className="ability">Bootstrap</span>. I have developed a strong
          understanding of <span className="ability"></span>GIT and{" "}
          <span className="ability"></span>REST APIs in my projects, and I find
          developing web apps incredibly rewarding. I also have experience
          working with <span className="ability">Python</span>, which I often
          use in my projects. My proficiency in using{" "}
          <span className="ability">Linux</span>, particularly{" "}
          <span className="ability">Ubuntu</span>, has allowed me to gain
          experience in system administration using the{" "}
          <span className="ability">Bash</span> terminal. I find Linux to be a
          highly useful operating system. I am passionate about the potential of{" "}
          <span className="ability">Web 3.0</span> and believe it has the
          ability to revolutionize the industry. With my knowledge of the{" "}
          <span className="ability">Solidity</span> language, I am capable of
          developing smart contracts for the Ethereum blockchain. I have a basic
          understanding of <span className="ability">penetration testing</span>{" "}
          and recognize the significance of{" "}
          <span className="ability">cybersecurity</span>. As a junior developer,
          I am eager to learn and grow both professionally and personally. I am
          committed to providing value to IT companies by contributing to new
          projects and challenges. I am excited to apply my skills and knowledge
          to real-world projects and make a positive impact in the field of
          technology. Thank you for taking the time to consider my
          qualifications.
        </p>
        <div className="container mb-2">
          <img
            src={picCV}
            className="img-fluid rounded-top img-thumbnail"
            alt="Picture CV"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
