import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto";

export const ComponenteB = ({ contacto }) => {
  return (
    <div>
      <h1> Contacto </h1>
      <h2>
        Nombre : {contacto.nombre} {contacto.apellido}
      </h2>
      <h3> Email : {contacto.email} </h3>
      <h3> Estado: {contacto.conectado ? "En Línea" : "No Disponible"} </h3>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};
