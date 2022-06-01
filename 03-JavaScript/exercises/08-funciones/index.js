/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 8 - Funciones
 */

/**
 * AlwaysTrue is a function that returns always true.
 */
const alwaysTrue = () => true;
console.log("alwaysTrue :>> ", alwaysTrue());

/**
 * DelayedGreeting() is a function that returns a promise that resolves after 5 seconds.
 */
async function delayedGreeting() {
  return setTimeout(() => {
    console.log("Hola, soy una promesa");
  }, 5000);
}
console.log("delayedGreeting() :>> ", await delayedGreeting());

/* A generator function of even Indexes. */
function* evenIndex() {
  let index = 0;
  while (true) {
    yield (index += 2);
  }
}

const even = evenIndex();

console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
