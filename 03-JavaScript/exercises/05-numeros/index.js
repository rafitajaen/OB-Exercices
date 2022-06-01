/* 
*    (Curso JavaScript Básico) 
*        Ejercicio del Tema 5 - Números
*/

const alturaCentimetros = 166;
const alturaMetros = alturaCentimetros/100;
console.log('alturaMetros :>> ', alturaMetros);

const peso = 55.0;

/* Rounding up the value of alturaMetros. */
const alturaCeil = Math.ceil(alturaMetros);
console.log('alturaCeil :>> ', alturaCeil);

/* Rounding down the value of peso. */
const pesoFloor = Math.floor(peso);
console.log('pesoFloor :>> ', pesoFloor);

/* Checking if the max value of JS is equal to the max value plus one. */
const maxValue = Number.MAX_VALUE;
const isEqual = (maxValue === maxValue+1);
console.log('isEqual :>> ', isEqual);
