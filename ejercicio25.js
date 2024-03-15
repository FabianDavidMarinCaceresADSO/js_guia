/* 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
programa que ingresando el costo de los medicamentos calcule el descuento y el
precio final. */


let nombreMed = (prompt("ingrse el nombre del medicamento"));
let medicamento = parseFloat(prompt("ingrese el precio del medicmento "));
const descuento = medicamento * 0.1; 
const preciofinal = medicamento - descuento ;

alert(`El medicamento que compro es ${nombreMed}\n, su precio es de ${medicamento.toFixed(0)}\n su descuento es del ${descuento.toFixed(2)}\n,  su precio final es de ${preciofinal.toFixed(2)}`);