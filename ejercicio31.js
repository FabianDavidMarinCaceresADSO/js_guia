/*31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita
hallar la solución, por favor utilizar funciones matemáticas para ello.:
a. rc((x2-x1)^2 + (y2-y1)^2).*/

function calcularDistancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Solicitar al usuario que ingrese las coordenadas de los puntos
let x1 = parseFloat(prompt("Ingrese la coordenada x del primer punto:"));
let y1 = parseFloat(prompt("Ingrese la coordenada y del primer punto:"));
let x2 = parseFloat(prompt("Ingrese la coordenada x del segundo punto:"));
let y2 = parseFloat(prompt("Ingrese la coordenada y del segundo punto:"));

// Calcular la distancia entre los dos puntos
let distancia = calcularDistancia(x1, y1, x2, y2);

// Mostrar la distancia entre los dos puntos
alert(`La distancia entre los dos puntos es: ${distancia.toFixed(2)}`);