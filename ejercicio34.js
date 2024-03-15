/*34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de
un depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).*/

const PI = Math.PI;


let radio = parseFloat(prompt("Ingrese el radio del depósito (en metros):"));
let altura = parseFloat(prompt("Ingrese la altura del depósito (en metros):"));

let volumen = PI * Math.pow(radio, 2) * altura;


let caudal = parseFloat(prompt("Ingrese el caudal de llenado del depósito (en m^3/s):"));

let tiempo = volumen / caudal;

// Mostrar el tiempo estimado para el llenado del depósito
alert(`El tiempo estimado para el llenado del depósito es de ${tiempo.toFixed(2)} segundos.`);
