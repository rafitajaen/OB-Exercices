/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 14 - DOM
 */

/* Adding an event listener to the button. */
const button = document.querySelector("#btn");

button.addEventListener("click", () => alert("click en el botón"));

/* Adding an event listener to the button. */
$(document).ready(() => {
  $("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
