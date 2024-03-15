/* 65. Escribir un programa que pida al usuario un número entero positivo y muestre por
pantalla la cuenta atrás desde ese número hasta cero separados por comas    */

// Solicitar al usuario que ingrese un número entero positivo
let numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Mostrar la cuenta regresiva desde el número ingresado hasta 0
for (let i = numero; i >= 0; i--) {
    console.log(i);
}
