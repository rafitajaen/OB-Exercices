/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 9 - Errores
 */

const winston = require("winston");

/* Creating a logger object. */
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    //new winston.transports.File({ filename: "combined.log" }),
  ],
});

/**
 * It throws a custom error.
 */
function customError() {
  throw "Hola, soy un customError!";
}

/* Catching the error and logging it. */
try {
  customError();
} catch (e) {
  logger.error(e);
}
