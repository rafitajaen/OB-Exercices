/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 11 - OOP
 */

class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    return this;
  }
}

const felipe = new Estudiante("Felipe", ["JS", "HTML", "CSS"]);

console.log(felipe.obtenDatos());
