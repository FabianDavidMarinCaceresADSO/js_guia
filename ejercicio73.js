/*73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y
muestre por pantalla el número de veces que aparece la letra en la frase.*/

// Solicitar al usuario que ingrese una frase y una letra
let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");

// Función para contar la cantidad de veces que aparece una letra en una frase
function contarLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return contador;
}

// Mostrar la cantidad de veces que aparece la letra en la frase
alert(`La letra ${letra} aparece ${contarLetra(frase, letra)} veces en la frase.`);
