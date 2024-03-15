/* 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos
los años que ha cumplido (desde 1 hasta su edad). */

// Solicitar al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad:"));

// Mostrar los años cumplidos desde 1 hasta la edad ingresada
for (let i = 1; i <= edad; i++) {
    console.log(`Año ${i}`);
}
