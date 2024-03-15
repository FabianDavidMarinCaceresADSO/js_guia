let precioPorMetroCuadrado = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));
let areaAPintar = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));

let presupuestoTotal = precioPorMetroCuadrado * areaAPintar;

alert(`El presupuesto total para el cliente es: ${presupuestoTotal} pesos.`);
