/* 
*    (Curso JavaScript Básico) 
*        Ejercicio del Tema 13 - ESLint
*        Código Importado desde ===> Ejercicio del Tema 4 - Cadenas
*/

const nombre = "Rafael";
const apellido = "Jaén";

/* Concatenating the two variables. */
const estudiante = nombre.concat(" ", apellido);
console.log("estudiante :>> ", estudiante);

/* Converting the string to uppercase. */
const estudianteMayus = estudiante.toUpperCase();
console.log("estudianteMayus :>> ", estudianteMayus);

/* Converting the string to lowercase. */
const estudianteMinus = estudiante.toLocaleLowerCase();
console.log("estudianteMinus :>> ", estudianteMinus);

/* Getting the length of the string. */
const estudianteLenght = estudiante.length;
console.log("estudianteLenght :>> ", estudianteLenght);

/* Getting the first character of the string. */
const nombreFirstChar = nombre[0];
console.log("nombreFirstChar :>> ", nombreFirstChar);

/* Getting the last character of the string. */
const apellidoLastChar = apellido[apellido.length-1];
console.log("apellidoLastChar :>> ", apellidoLastChar);

/* Replacing the space between the two variables with nothing. */
const estudianteNoSpaces = estudiante.replace(" ", "");
console.log("estudianteNoSpaces :>> ", estudianteNoSpaces);

/* Checking if the string `estudiante` includes the string `nombre`. */
const isNameInclude = estudiante.includes(nombre);
console.log("isNameInclude :>> ", isNameInclude);