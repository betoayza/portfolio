import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
//import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "./Modal";
import axios from "axios";

const initialForm = {
  name: "",
  lastName: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [isSended, setIsSended] = useState(false);
  const [modal, setModal] = useState(false);

  // let navigate = useNavigate();
  // const { username, code } = useParams();

  const handleClean = () => {
    setForm(initialForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsSended(true);

    const options = {
      url: "https://formsubmit.co/ajax/203cf7fc5cf3429a39018970bed76969",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 3000,
      data: form,
    };

    await axios
      .request(options)
      .then((res) => {
        console.log(res);
        setModal(true);
        if (res.data) {
          setIsSended(true);
          setLoading(true);
        }
      })
      .catch((error) => error);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleClose = () => {
    setIsSended(false);
    setModal(false);
    handleClean();
  };

  return modal ? (
    <Modal>
      {isSended ? (
        <div
          className={"text-center"}
          style={{ display: "grid", placeItems: "center" }}
        >
          <h2>Mensaje enviado ;)</h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      ) : (
        <div
          className={"text-center"}
          style={{ display: "grid", placeItems: "center" }}
        >
          <h2>Hubo un error :(</h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      )}
    </Modal>
  ) : (
    <div
      className={"h-auto text-center container"}
      style={{ display: "grid", placeItems: "center", maxWidth: "100%" }}
    >
      <h2>Contact:</h2>
      <form
        onSubmit={handleSubmit}
        className={"container"}
        style={{ fontFamily: "cursive", display: "grid", placeItems: "center" }}
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
          name="email"
          placeholder="Email..."
          value={form.mail}
          onChange={handleChange}
          required
        />

        <textarea
          type="text"
          className="form-control w-100 mt-1"
          style={{ color: "green", fontStyle: "italic" }}
          name="message"
          placeholder="Mensaje..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          cols={21}
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
