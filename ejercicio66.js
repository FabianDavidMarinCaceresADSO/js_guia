/* 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés
anual y el número de años, y muestre por pantalla el capital obtenido en la
inversión cada año que dura la inversión.*/

// Solicitar al usuario que ingrese la cantidad a invertir, el interés anual y el número de años
let cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual (%):")) / 100;
let numeroAnios = parseInt(prompt("Ingrese el número de años de la inversión:"));

// Calcular y mostrar el capital obtenido cada año
for (let i = 1; i <= numeroAnios; i++) {
    let capital = cantidadInvertir * (1 + interesAnual) ** i;
    console.log(`Año ${i}: $${capital.toFixed(2)}`);
}
