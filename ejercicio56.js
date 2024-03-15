/* 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es
menor a $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a
$100.000 se paga un interés anual de 4%. Al final mostrar el saldo final y el interés
pagado.*/

// Solicitar al usuario que ingrese el saldo en la cuenta bancaria
let saldo = parseFloat(prompt("Ingrese el saldo en la cuenta bancaria:"));

// Calcular los intereses dependiendo del saldo
let interes;
if (saldo < 100000) {
    interes = saldo * 0.03;
} else {
    interes = saldo * 0.04;
}

// Calcular el saldo final
let saldoFinal = saldo + interes;

// Mostrar el saldo final y los intereses pagados
alert(`Saldo final: ${saldoFinal}\nIntereses pagados: ${interes}`);
