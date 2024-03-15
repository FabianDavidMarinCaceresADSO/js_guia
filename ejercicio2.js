/* 2. escribir un programa que almacene la cadena de caracteres contraseña de una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
ingresar valores alfanuméricos */


let contraseña_nueva = prompt("ingrese una contrseña nueva")

if (/^[a-zA-Z0-9]+$/.test(contraseña_nueva)) {
  alert("contraseña aceptada")
}
let controseña_actual = prompt("ingrese su contraseña")

if (contraseña_nueva === controseña_actual) {
  alert("contraseña aceptada")
}

else alert("su contraseña no conside ")


