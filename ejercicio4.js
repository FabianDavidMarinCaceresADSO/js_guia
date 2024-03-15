/*4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla
si es par o impar.*/

let num1 = parseInt(prompt("ingrese un numero"));

if  (isNaN(num1)) {
    alert("ingrese un valor numerico")
}


if (num1 % 2 === 0){
    alert("el numero es par")
    
}
else {
    alert("El numero es impar")

}
