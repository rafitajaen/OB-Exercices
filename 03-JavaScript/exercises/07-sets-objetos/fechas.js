/*
 *    (Curso JavaScript Básico)
 *        Ejercicio 3 del Tema 7 - Fechas
 */

const hoy = new Date();
console.log('hoy :>> ', hoy);

const birthday = new Date(1986,08,29);
console.log('birthday :>> ', birthday);

const isAfter = hoy.getTime() > birthday.getTime();
console.log('isAfter :>> ', isAfter);

const dayBirth = birthday.getDate();
console.log('dayBirth :>> ', dayBirth);

const monthBirth = birthday.getMonth() + 1;
console.log('monthBirth :>> ', monthBirth);

const yearBirth = birthday.getFullYear();
console.log('yearBirth :>> ', yearBirth);

/** Alternative definition of separated values of birthday*/
const [day, month, year] = birthday.toLocaleDateString('es-ES').split('/');
console.log('day, month, year :>> ', day, month, year);