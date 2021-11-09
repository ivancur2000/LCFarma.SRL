import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const FormContact = ({ changeLanguage }) => {
  const formElement = useRef();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    error: "",
    errorTran: "",
    success: "",
    successTran: "",
  });

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      form.name.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.message.trim()
    ) {
      emailjs
        .sendForm(
          "service_kmf86mh",
          "template_im4jfap",
          formElement.current,
          "user_EVfvVuBQiKgl2mqYc65cq"
        )
        .then(() => {
          setForm({
            name: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
            error: "",
            errorTran: "",
            success: "Mensaje enviado",
            successTran: "Message sent",
          });
        })
        .catch((err) => console.log(err));
    } else {
      setForm({
        ...form,
        error: "No puede dejar espacios en blanco",
        errorTran: "you cannot leave empty fields",
        success: "",
        successTran: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mx-0 my-3">
        <form
          id="form"
          className="col-md-5"
          onSubmit={handleOnSubmit}
          ref={formElement}
        >
          <h3 className="title-about text-center my-4">
            {changeLanguage ? "GET IN TOUCH" : "PONTE EN CONTACTO"}
          </h3>
          <input type="hidden" name="to_name" value="LCFarma.SRL" />
          <div className="row">
            <div className="mb-3 col-6">
              <input
                type="text"
                className="form-control form-location"
                placeholder={changeLanguage ? "Name" : "Nombre"}
                name="name"
                value={form.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3 col-6">
              <input
                type="text"
                className="form-control form-location"
                placeholder={changeLanguage ? "Surname" : "Apellido"}
                name="lastName"
                value={form.lastName}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-6">
              <input
                type="text"
                className="form-control form-location"
                placeholder="E-mail"
                name="email"
                value={form.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3 col-6">
              <input
                type="text"
                className="form-control form-location"
                placeholder={changeLanguage ? "Phone" : "Teléfono"}
                name="phone"
                value={form.phone}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-location"
              placeholder={
                changeLanguage
                  ? "Write your message here"
                  : "Escribe tu mensaje aquí"
              }
              cols="30"
              rows="5"
              name="message"
              value={form.message}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <button className="btn btn-formSend" type="submit">
                {changeLanguage ? "Send" : "Enviar"}
              </button>
            </div>
          </div>
          {form.success.trim() && (
            <div className="alert alert-success my-1">
              {changeLanguage ? form.successTran : form.success}
            </div>
          )}
          {form.error.trim() && (
            <div className="alert alert-danger my-1">
              {changeLanguage ? form.errorTran : form.error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
