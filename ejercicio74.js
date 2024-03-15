/* 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta
que el usuario escriba “salir” que terminará. */

// Variable para almacenar lo ingresado por el usuario
let entrada;

// Repetir lo ingresado por el usuario hasta que escriba "salir"
do {
    entrada = prompt("Ingrese algo (escriba 'salir' para terminar):");
    console.log(entrada);
} while (entrada !== "salir");

console.log("Programa finalizado.");
