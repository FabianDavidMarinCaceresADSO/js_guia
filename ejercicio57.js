/*57. Consideramos la asignación de una calificación literal a un rango dado de
calificaciones numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10
Asignar la calificación de A equivale a Excelente 8.1 a 9 Asignar la calificación de A
equivale a Muy bien 7.5 a 8 Asignar la calificación de A equivale a Bien Menor a 7.5
asignar la calificación de NA No Aprobado. */

// Solicitar al usuario que ingrese la calificación numérica
let calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));

// Asignar la calificación literal según el rango de calificaciones numéricas
let calificacionLiteral;
if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
    calificacionLiteral = "Excelente";
} else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9.1) {
    calificacionLiteral = "Muy bien";
} else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8.1) {
    calificacionLiteral = "Bien";
} else {
    calificacionLiteral = "No Aprobado";
}

// Mostrar la calificación literal
alert(`La calificación literal es: ${calificacionLiteral}`);
