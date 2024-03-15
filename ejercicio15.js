/*15. Escribir un programa que calcule la longitud y el área de una circunferencia.*/


let radio = parseInt(prompt("ingrese el radio de la circunferencia"))

let pi = Math.PI;

longitud = 2 * radio * pi

alert(`La longitud de la  circunferencia es ${longitud}`)

let area = pi * Math.pow(radio, 2);

alert(`el area de la circunferencia es ${area}`)


