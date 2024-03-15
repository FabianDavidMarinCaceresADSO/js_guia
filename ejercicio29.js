/* 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5
puntos.*/

sumacalificacion = 0
for (let nota = 1; nota <= 5 ; nota++) {
   let calificaciones = parseFloat(prompt(`ingrese la nota del exame ${nota}`))
    sumacalificacion += calificaciones;
    
}

promedio_calificacion = sumacalificacion / 5;

alert(`el promedio de las 5 notas es de ${promedio_calificacion}`)
