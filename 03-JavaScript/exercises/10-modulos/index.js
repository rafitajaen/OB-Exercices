/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 10 - Modulos
 */

import * as controller from "./controller.js";
import chalk from "chalk";

/* Calling the functions suma and multiplica from the controller.js file. */
const multiplication = controller.multiplica(
  controller.suma(1, 2),
  controller.suma(4, 5)
);
console.log("multiplication :>> ", multiplication);

/* Using the chalk library to color the console.log output. */
console.log(chalk.green("multiplication :>> ", multiplication));
