// Importa el módulo `process` de Node.js
const process = require('process');

// Obtiene todas las variables de entorno y sus valores
const envVariables = process.env;

// Itera a través de las variables de entorno y sus valores
for (const key in envVariables) {
  if (envVariables.hasOwnProperty(key)) {
    console.log(`${key}: ${envVariables[key]}`);
  }
}
