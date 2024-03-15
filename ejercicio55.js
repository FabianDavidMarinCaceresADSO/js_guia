/* 55. En una tienda de HELADO da un descuento por compra a sus clientes con
membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A,
tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B
15% de descuento Tipo C 20% de descuento.*/     

// Solicitar al usuario que ingrese el tipo de membresía y el total de la compra
let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

// Definir los descuentos según el tipo de membresía
let descuento;
if (tipoMembresia === "A") {
    descuento = totalCompra * 0.10;
} else if (tipoMembresia === "B") {
    descuento = totalCompra * 0.15;
} else if (tipoMembresia === "C") {
    descuento = totalCompra * 0.20;
} else {
    alert("Tipo de membresía no válido.");
}

// Calcular el total a pagar con descuento
let totalPagar = totalCompra - descuento;
alert(`El total a pagar con descuento es: ${totalPagar}`);
