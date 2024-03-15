/*  51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado
excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento.*/

// Solicitar al usuario que ingrese el consumo en el restaurante
let consumo = parseFloat(prompt("Ingrese el monto total del consumo en el restaurante:"));

// Verificar si el consumo excede los $130.000 para aplicar el descuento
if (consumo > 130000) {
    // Calcular el descuento del 15% si el consumo excede los $130.000
    let descuento = consumo * 0.15;
    // Calcular el total a pagar con descuento
    let totalPagar = consumo - descuento;
    alert(`El total a pagar con un descuento del 15% es: ${totalPagar}`);
} else {
    // Mostrar el total a pagar sin descuento si el consumo no excede los $130.000
    alert(`El total a pagar sin descuento es: ${consumo}`);
}
