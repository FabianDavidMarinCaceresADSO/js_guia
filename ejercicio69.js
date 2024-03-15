/* 69. Escribir un programa que pida al usuario un número entero y muestre por consola
un triángulo rectángulo como el de más abajo.*/

// Solicitar al usuario que ingrese un número entero
let altura = parseInt(prompt("Ingrese un número entero:"));

// Mostrar el triángulo rectángulo
for (let i = 1; i <= altura; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += `${j}`;
    }
    console.log(fila);
}
