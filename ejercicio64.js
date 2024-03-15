/* 64. Escribir un programa que pida al usuario un número entero positivo y muestre por
pantalla todos los números impares desde 1 hasta ese número separados por
coma.*/

// Solicitar al usuario que ingrese un número entero positivo
let numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Mostrar los números impares desde 1 hasta el número ingresado
for (let i = 1; i <= numero; i += 2) {
    console.log(i);
}
