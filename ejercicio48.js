/* 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura
geométrica desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio */

// Solicitar al usuario que ingrese la figura geométrica a calcular
let figura = prompt("¿Qué figura geométrica desea calcular? (Escriba T para Triángulo o C para Círculo):");

// Calcular el área según la figura geométrica seleccionada
let area;
if (figura === "T" || figura === "t") {
    // Triángulo
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    area = (base * altura) / 2;
} else if (figura === "C" || figura === "c") {
    // Círculo
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    area = Math.PI * Math.pow(radio, 2);
} else {
    alert("Figura geométrica no reconocida.");
}

// Mostrar el área calculada
alert(`El área de la figura geométrica seleccionada es: ${area}`);
