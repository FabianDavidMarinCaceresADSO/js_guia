/* 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla
si es un número primo o no. */

// Solicitar al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingrese un número entero:"));

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Mostrar si el número ingresado es primo o no
if (esPrimo(numero)) {
    alert(`${numero} es un número primo.`);
} else {
    alert(`${numero} no es un número primo.`);
}
