/*Escriba una expresión regular que reconozca los números en punto flotante (por
    ejemplo -2.3e-1, -3e2, 23, 3.2).*/

const regex = /^-?\d+(\.\d+)?(e-?\d+)?$/;


let numero = prompt("Ingrese un número:");

if (regex.test(numero)) {
    alert("El número ingresado es un número en punto flotante válido.");
} else {
    alert("El número ingresado no es un número en punto flotante válido.");
}
