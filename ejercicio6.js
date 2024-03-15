/*6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
grupo al que corresponde.*/


let nombre = prompt("Ingrese su nombre:");
let sexo = prompt("Ingrese su sexo (M para mujer, H para hombre):")
let nombre1 = nombre.charAt(0).toUpperCase

if (sexo === "M") {

  if (nombre1 < "H") {
    grupo = "A"

  }
  else {

    grupo = "B"
  }
}

alert(`El alumno ${nombre} pertenece al grupo ${grupo}`)