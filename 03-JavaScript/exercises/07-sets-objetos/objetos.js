/*
 *    (Curso JavaScript Básico)
 *        Ejercicio 2 del Tema 7 - Sets y Objetos
 */

const datos = {
  nombre: "Rafa",
  apellido: "J.",
  edad: 35,
  altura: 1.66,
  isDev: true,
};

const edad = datos.edad;
console.log("edad :>> ", edad);

const perico = {
  nombre: "Perico",
  apellido: "Monteverde",
  edad: 34,
  altura: 1.8,
  isDev: false,
};

const loli = {
  nombre: "Loli",
  apellido: "García",
  edad: 36,
  altura: 1.5,
  isDev: false,
};

/* Creating an array of objects. */
const lista = [datos, perico, loli];
console.log("lista :>> ", lista);

/* Sorting the array of objects by the age property. */
const sortedList = lista.sort((a, b) => a.edad - b.edad);
console.log('sortedList :>> ', sortedList);

