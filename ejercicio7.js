/*los tramos impositivos para la declaración de la renta en un determinado país son:
a.entre 10000 y 20000 ----5 %
  b.entre 20000 y 35000 ----10 %
    c.entre 35000 y 60000 ----20 %
      d.más de 60000 ----45 %
        escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
el tipo de impositivo que le corresponde */

let renta_anual = prompt("¿cual es su renta anual?");

if (renta_anual >= 10000 || renta_anual == 20000) {
  alert("su renta es del 5 %")
}

if (renta_anual >= 20000 || renta_anual == 35000) {

  alert("su renta es del 10 %")
}

if (renta_anual >= 35000 || renta_anual == 60000) {

  alert("su renta es del 20 %")

}

else if (renta_anual > 60000) {

  alert("su renta es del 45 %")

}
