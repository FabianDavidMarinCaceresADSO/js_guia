/*8. Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora. */

let nombre = prompt("ingrese el nombre del trabajador")
let horas_trabajo = prompt("ingrese la cantida de horas trabajadas")
let precio_hora = parseFloat(prompt("ingrese el precio de una hora de trabajo"))

let sueldo = horas_trabajo *  precio_hora

alert(`El trabajador ${nombre}, trabajo ${horas_trabajo} horas, su sueldo por hora es de ${sueldo.toFixed(3)}`);
