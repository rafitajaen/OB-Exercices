import React, { useState } from "react";
import { Contacto } from "../../models/contacto";
import { ComponenteB } from "../pure/ComponenteB";

export const ComponenteA = () => {
  const contactoInicial = new Contacto(
    "Paco",
    "Gandía",
    "paco@gandia.com",
    true
  );

  const [contacto, setContacto] = useState(contactoInicial);

  function actualizarContacto() {
    setContacto(
      new Contacto(
        contacto.nombre,
        contacto.apellido,
        contacto.email,
        !contacto.conectado
      )
    );
  }

  return (
    <div>
      <ComponenteB contacto={contacto}></ComponenteB>
      <button onClick={actualizarContacto}>
        {contacto.conectado ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};
