/*18. Escribir un programa que evalúe la siguiente expresión(a + 7 * c) / (b + 2 - a) + 2 * b */

let a = parseInt(prompt("ingrese a "));
let b = parseInt(prompt("ingrese b "));
let c = parseInt(prompt("ingrse c "));

let resultado = (a + b * c) / (b + 2 - a) + 2 * b;

window.alert(`El resultado de la operacion es ${resultado}`)
