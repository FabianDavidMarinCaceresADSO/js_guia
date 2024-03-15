/* 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de 
segundo grado: a * x2 + b + x + c, siendo X un valor constante. */

let a = parseFloat(prompt("Ingrese el coeficiente 'a'"));
let b = parseFloat(prompt("ingrese el coeficiente 'b'"));
let c = parseFloat(prompt)("ingrese el coeficiente 'c'");

let dircriminante = Math.pow(b,2) - 4 * a * c;

let mensajeAlerta;

if (discriminante > 0){
    let raiz1 = (-b + Math.sqrt(dircriminante)) / (2*a);
    let raiz2 = (-b - Math.sqrt(dircriminante)) / (2 * a);

   let  mensajeAlerta;
}

if (discriminante === 0) {
let raiz = -b / (2 * a);
    mensajeAlerta = `La raices reales son: ${raiz} y ${raiz2}`;
} else if (discriminante == 0) {
    let raiz = -b / (2 * a);
    mensajeAlerta = `La raiz doble es: ${raiz}`;
} else  {
    mensajeAlerta = "la ecuacion no tiene raices reales";
}

window.alert="La ecuacion no  tiene raice reales"



