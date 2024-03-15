/*En una determinada empresa, sus empleados son evaluados al final de cada año.
Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir
aumentando, traduciéndose en mejores beneficios.Los puntos que pueden
conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores
intermedios*/


let puntuacionInicial = 0.0;
let totalPuntos = 0.0;

for (let i = 0; i < 5; i++) {
  let nuevaPuntuacion = parseFloat(prompt("Ingrese la puntuación obtenida en la evaluación " + (i + 1) + ":"));
  if (!isNaN(nuevaPuntuacion) && (nuevaPuntuacion === 0.0 || nuevaPuntuacion === 0.4 || nuevaPuntuacion === 0.6)) {
    totalPuntos += nuevaPuntuacion;
  } else {
    alert("La puntuación ingresada no es válida. Por favor, ingrese 0.0, 0.4 o 0.6.");
    i--; // Volvemos a pedir la puntuación para esta evaluación
  }
}

alert("El total de puntos obtenidos es: " + totalPuntos.toFixed(1));