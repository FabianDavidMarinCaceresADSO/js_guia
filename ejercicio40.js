/*  40. Una empresa que contrata personal requiere determinar la edad de las personas
que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el
año en que nacieron. Realice el código que representen el algoritmo para
solucionar este problema. */


let añoActual = new Date().getFullYear();

// Solicitar al usuario que ingrese el año de nacimiento
let añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

// Calcular la edad
let edad = añoActual - añoNacimiento;

// Mostrar la edad
alert(`La edad aproximada es: ${edad} años.`);