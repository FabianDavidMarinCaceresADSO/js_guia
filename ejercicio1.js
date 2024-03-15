/*1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos. */


let edad = prompt("ingrese su edad")

if (edad <= 17 && edad > 0)

  alert("eres menor de edad")


if (edad <= 0)
  alert("error escribiste mal el numero")

else if (edad >= 18)

  alert("eres mayor de edad ")




