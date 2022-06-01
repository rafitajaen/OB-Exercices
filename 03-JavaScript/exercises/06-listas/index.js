/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 6 - Listas
 */

let compra = ["Pan", "Leche", "Mantequilla", "Galletas", "Lechuga"];


/* Adding the string "Aceite" to the end of the array. */
compra.push("Aceite");
console.log("compra :>> ", compra);

/* Removing the last element of the array. */
compra.pop();
console.log("compra :>> ", compra);

let reyLeon = {
  titulo: "El Rey León",
  director: "Rob Minkoff",
  fecha: 1994,
};

let aladdin = {
  titulo: "Aladdin",
  director: "Ron Clements",
  fecha: 1992,
};

let matrix = {
  titulo: "The Matrix",
  director: "Lana Wachowski",
  fecha: 1999,
};

let pelis = [reyLeon, aladdin, matrix];

/* Filtering the array pelis and returning the objects that have a fecha property greater than 2010. */
const post2010 = pelis.filter((o) => o.fecha > 2010);
console.log("post2010 :>> ", post2010);

/* Creating a new array with the directors of the movies. */
const directors = pelis.map((o) => o.director);
console.log("directors :>> ", directors);

/* Creating a new array with the titles of the movies. */
const titulos = pelis.map((o) => o.titulo);
console.log("titulos :>> ", titulos);

/* Creating a new array with the directors and titles of the movies with concat method. */
const directorsAndTitles = directors.concat(titulos);
console.log("directorsAndTitles :>> ", directorsAndTitles);

/* Creating a new array with the directors and titles of the movies with propagation method */
const directorsAndTitles2 = [...directors, ...titulos];
console.log("directorsAndTitles2 :>> ", directorsAndTitles2);
