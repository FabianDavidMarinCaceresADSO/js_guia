/*32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a
pagar por cada producto y el total de la compra*/

let precioProductos = [];
for (let i = 0; i < 5; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
    precioProductos.push(precio);
}

// Definir los descuentos para los productos
const descuento1 = 0.05; // 5% de descuento para los dos primeros productos
const descuento2 = 0.02; // 2% de descuento para los dos últimos productos

let totalCompra = 0;

// Calcular el precio con descuento para los productos y sumar al total de la compra
for (let i = 0; i < precioProductos.length; i++) {
    if (i < 2) {
        // Aplicar descuento del 5% para los dos primeros productos
        totalCompra += precioProductos[i] * (1 - descuento1);
    } else if (i >= 3) {
        // Aplicar descuento del 2% para los dos últimos productos
        totalCompra += precioProductos[i] * (1 - descuento2);
    } else {
        // No aplicar descuento para los productos restantes
        totalCompra += precioProductos[i];
    }
}

// Mostrar el total de la compra
alert(`Total de la compra: ${totalCompra.toFixed(2)}`);