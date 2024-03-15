/* 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los
lados sean positivos: área triangulo= lado * lado*/

// Solicitar al usuario que ingrese los lados del rectángulo
let lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo:"));
let lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo:"));

// Verificar que los lados sean positivos
if (lado1 > 0 && lado2 > 0) {
    // Calcular el área del rectángulo
    let area = lado1 * lado2;
    alert(`El área del rectángulo es: ${area}`);
} else {
    alert("Los lados del rectángulo deben ser números positivos.");
}
