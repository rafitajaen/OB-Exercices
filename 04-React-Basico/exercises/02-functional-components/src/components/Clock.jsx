import React, { useEffect, useState } from "react";

export const Clock = () => {
  const initialtPersona = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [persona, setPersona] = useState(initialtPersona);

  useEffect(() => {
    const timerID = setInterval(() => {
      actualizarPersona();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  const actualizarPersona = () => {
    return setPersona({
      fecha: persona.fecha,
      edad: persona.edad + 1,
      nombre: persona.nombre,
      apellidos: persona.apellidos,
    });
  };

  return (
    <div>
      <h2>
        Hora actual:
        {persona.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {persona.nombre} {persona.apellidos}
      </h3>
      <h1>Edad: {persona.edad}</h1>
    </div>
  );
};
