/* 41. Ingrese una frase que lo identifique como programador de Software y luego
mostrar esta frase invertida */

let frase = prompt("Ingrese una frase que lo identifique como programador de software:");

let caracteres = frase.split('');

let fraseInvertida = caracteres.reverse().join('');

alert(`La frase invertida es: ${fraseInvertida}`);