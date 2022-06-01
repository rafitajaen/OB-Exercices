/* The above code is calculating the factorial of 10 using a "while" loop */
let factorial = 1;

let contador = 1;

while (contador <= 10) {
  factorial *= contador;
  contador++;
}

console.log("factorial :>> ", factorial);
