/* 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados.*/

// Solicitar al usuario que ingrese el nombre del mes
let mes = prompt("Ingrese el nombre del mes:").toLowerCase();

// Determinar el signo zodiacal según el nombre del mes
let signoZodiacal;
if (mes === "enero" || mes === "febrero") {
    signoZodiacal = "Acuario";
} else if (mes === "marzo" || mes === "abril") {
    signoZodiacal = "Piscis";
} else if (mes === "mayo" || mes === "junio") {
    signoZodiacal = "Géminis";
} else {
    signoZodiacal = "No se encontró un signo zodiacal para el mes ingresado.";
}

// Mostrar el signo zodiacal
alert(`El signo zodiacal para el mes ingresado es: ${signoZodiacal}`);
