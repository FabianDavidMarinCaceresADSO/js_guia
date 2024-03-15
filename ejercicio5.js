/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
tributar o no.*/

let edad = parseInt(prompt("ingrese su edad"));
let ingresos = parseInt(prompt("¿cuanto dinero gana al mes"))

if (isNaN(edad) || isNaN(ingresos)); {
  alert(" ingrese valores numericos ")

}


if (edad < 16) {
  alert("Usted no es mayor de 16 años no puede calcular impuestos");

}

if (ingresos >= 1000) {

  alert("Usted debe tributar")
}



else if (edad > 16 || ingresos < 1000) {

  alert("usted no debe tributar")
}

