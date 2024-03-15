/*42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.
Calcular el monto total de la venta, según la cantidad de artículos solicitados
durante el día.*/

const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

// Solicitar al usuario la cantidad de cada producto vendido durante el día
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

// Calcular el monto total de la venta
let montoTotalVenta = (cantidadLibros * precioLibro) + (cantidadCuadernos * precioCuaderno) + (cantidadLapiceros * precioLapicero);

// Mostrar el monto total de la venta
alert(`El monto total de la venta es: ${montoTotalVenta}`);
