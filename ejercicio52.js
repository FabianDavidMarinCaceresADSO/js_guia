/* 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el
empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es
administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es
necesario conocer el total de horas trabajadas.
*/
// Solicitar al usuario que ingrese el tipo de empleado y las horas trabajadas
let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();
let horasTrabajadas = parseInt(prompt("Ingrese el total de horas trabajadas:"));

// Definir los valores de pago por hora según el tipo de empleado
let pagoPorHora;
if (tipoEmpleado === "planta") {
    pagoPorHora = 20000;
} else if (tipoEmpleado === "administrativo") {
    pagoPorHora = 10000;
} else {
    alert("Tipo de empleado no válido.");
}

// Calcular el pago total del trabajador
let pagoTotal = horasTrabajadas * pagoPorHora;
alert(`El pago total del trabajador es: ${pagoTotal}`);
