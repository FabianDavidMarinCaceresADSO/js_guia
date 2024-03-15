/* 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia ifelse que muestre en pantalla la palabra Alarma si la variable presión es mayor a
200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar
en pantalla la palabra Normal.
*/


// Definir las variables temperatura y presión (aquí puedes asignarles valores)
let temperatura = 90;
let presion = 220;

// Verificar las condiciones con la sentencia if-else
if (presion > 200 || temperatura > 100) {
    // Mostrar "Alarma" si la presión es mayor a 200 o la temperatura es mayor a 100
    alert("Alarma");
} else {
    // Mostrar "Normal" si ninguna de las condiciones anteriores se cumple
    alert("Normal");
}
