/*47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de
ellos, el menor o si son iguales.*/

// Solicitar al usuario que ingrese tres números diferentes
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Calcular el mayor, el menor o si son iguales
let mayor = Math.max(numero1, numero2, numero3);
let menor = Math.min(numero1, numero2, numero3);

let mensaje;
if (mayor === menor) {
    mensaje = "Los tres números son iguales.";
} else {
    mensaje = `El mayor de los tres números es: ${mayor}\nEl menor de los tres números es: ${menor}`;
}

// Mostrar el resultado
alert(mensaje);
