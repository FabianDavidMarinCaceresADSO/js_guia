/*46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes. */

// Solicitar al usuario que ingrese tres números diferentes
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Calcular el mayor de los tres números
let mayor = Math.max(numero1, numero2, numero3);

// Mostrar el resultado
alert(`El mayor de los tres números es: ${mayor}`);
