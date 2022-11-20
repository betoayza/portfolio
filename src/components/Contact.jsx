import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
//import { useNavigate, useParams } from "react-router-dom";
// import { Modal } from "./Modal";

const initialForm = {
  name: "",
  lastName: "",
  mail: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [isSended, setIsSended] = useState(false);

  // let navigate = useNavigate();
  // const { username, code } = useParams();

  const handleClean = () => {
    setForm(initialForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSended(true);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleClose = () => {
    setIsSended(false);
    handleClean();
  };

  return isSended ? (
    <Modal>
      <h2>Mensaje enviado ;)</h2>
      <button type="button" className="btn btn-danger" onClick={handleClose}>
        Cerrar
      </button>
    </Modal>
  ) : (
    <div
      className={"h-auto text-center"}
      style={{ display: "grid", placeItems: "center" }}
    >
      <h2>Contact:</h2>
      <form
        onSubmit={handleSubmit}
        className={"container"}
        style={{ fontFamily: "cursive" }}
      >
        <input
          type="text"
          className="form-control w-100 mt-1"
          name="name"
          placeholder="Nombre..."
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control w-100 mt-1"
          name="lastName"
          placeholder="Apellido..."
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          className="form-control w-100 mt-1"
          name="mail"
          placeholder="Email..."
          value={form.mail}
          onChange={handleChange}
          required
        />

        <textarea
          type="text"
          className="form-control w-100 mt-1"
          style={{color: "green"}}
          name="message"
          placeholder="Mensaje..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          cols={10}
          maxLength={500}
          required
        />

        <div className={"m-1"}>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>

          <button type="reset" className="btn btn-danger" onClick={handleClean}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};
