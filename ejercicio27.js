/*27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final.*/

let sumacalificacion = 0;

for (let parcial = 1; parcial <= 3 ; parcial++) {
    let notaParcial = parseFloat(prompt(`Ingrese la nota del parcial ${parcial}:`));
    sumacalificacion += notaParcial;
}


let promedio_parcial = sumacalificacion / 3;

let porcentaje_parciales = promedio_parcial * 0.55;


let examen_final = parseFloat(prompt(`Ingrese la nota del examen final:`));

let nota_examen = examen_final * 0.3;


let trabajo_final = parseFloat(prompt(`Ingrese la nota del trabajo final:`));

let nota_trabajo = trabajo_final * 0.15;

let promedio_final = porcentaje_parciales + nota_examen + nota_trabajo;

// Mostrar el promedio final de la materia
alert(`El promedio final de la materia de algoritmos es: ${promedio_final.toFixed(2)}`);