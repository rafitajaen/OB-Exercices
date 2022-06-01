
/* The above code is calculating the factorial of 10 using a "while" loop and control flow (if + break). */
let factorial = 1;

let contador = 1;

while (true) {
    if(contador<=10){
        factorial *= contador;
        contador++;
    }
    else break;
  
}

console.log("factorial :>> ", factorial);
