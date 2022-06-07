import React, { useRef } from "react";
import Contact from "../../../models/contact";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const isConnectedRef = useRef(false);

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      isConnectedRef.current.checked
    );
    console.log(isConnectedRef);
    add(newContact);
  }


  return (
    <form
      onSubmit={addContact}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Name"
        />
        <input
          ref={surnameRef}
          id="inputSurname"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Surname"
        />
        <input
          ref={emailRef}
          id="inputEmail"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Email"
        />
        <input
          ref={isConnectedRef}
          id="inputConnection"
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-check-label" for="inputConnection">
          Connected
        </label>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
