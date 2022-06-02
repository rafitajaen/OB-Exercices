/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 12 - Depuración
 */

/**
 * It takes a number as an argument, and returns an array of numbers that are the result of the
 * Fibonacci sequence up to the number passed as an argument
 * @param num - The number of elements in the Fibonacci sequence to return.
 * @returns An array of numbers.
 */
function fibonacci(num) {
  let array = [];
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      if (i <= 2) {
        array = [...array, 1];
      } else {
        let siguiente = array[array.length - 2] + array[array.length - 1];
        array = [...array, siguiente];
      }
    }
  }
  return array;
}

console.log('fibonacci(6) :>> ', fibonacci(6));