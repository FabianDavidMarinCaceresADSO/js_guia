/* 19. Escribir un programa que calcule el área y el volumen de un cilindro.*/
let radio = parseFloat(prompt("ingrese el radio deñ cilindro"));
let altura = parseFloat(prompt("ingrese la altura del cilindro"));

let areaBase = Math.PI *Math.pow(radio, 2);
let volumen = areaBase * altura;
let areatotal = 2 * Math.PI * radio * (radio + altura);
window.alert(`El area del cilindro es de: ${areatotal.toFixed(2)} unidades cuadradas\n EL volumen del cilindro es de: ${volumen.toFixed(2)} unidades cubicas`)
