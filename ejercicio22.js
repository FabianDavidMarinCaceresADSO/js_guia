/*22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que
cada minuto cuesta $355 pesos y un IVA 20%.*/

let  tiempo_llamada = prompt("ingrese los minutos que duro la llamada ");
let   precio_minuto = 355
const IVA = 20

let preciollamada =   tiempo_llamada * precio_minuto

let llamada_iva = preciollamada * (IVA / 100);

alert(`el precio de la llamada fue ${preciollamada}\N el precio de la llama con iva incuido es de ${llamada_iva}`)





