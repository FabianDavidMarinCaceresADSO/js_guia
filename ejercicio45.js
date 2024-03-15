/*45. Determinar si un número es positivo y menor que 100. */

// Solicitar al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número:"));

// Verificar si el número es positivo y menor que 100
if (numero > 0 && numero < 100) {
    alert("El número es positivo y menor que 100.");
} else {
    alert("El número no cumple con las condiciones requeridas.");
}
