/*44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando
como constante el valor de una moneda.*/

// Valor de una moneda en pesos
const valorDolar = 3500; // Por ejemplo
const valorEuro = 4100; // Por ejemplo

// Solicitar al usuario la cantidad de pesos a convertir
let cantidadPesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir:"));

// Calcular el equivalente en dólares y euros
let equivalenteDolar = cantidadPesos / valorDolar;
let equivalenteEuro = cantidadPesos / valorEuro;

// Mostrar los resultados
alert(`El equivalente en dólares es: ${equivalenteDolar}\nEl equivalente en euros es: ${equivalenteEuro}`);

