/*72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla
una a una las letras de la palabra introducida empezando por la última.*/

// Solicitar al usuario que ingrese una palabra
let palabra = prompt("Ingrese una palabra:");

// Mostrar las letras de la palabra de forma inversa
for (let i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra[i]);
}

