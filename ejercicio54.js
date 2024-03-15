/* 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que
él segundo, en caso contrario indicar con un mensaje que la operación no es
posible realizarla*/

// Solicitar al usuario que ingrese los dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar si el primer número es mayor que el segundo para realizar la resta
if (numero1 > numero2) {
    let resta = numero1 - numero2;
    alert(`La resta es: ${resta}`);
} else {
    alert("La resta no es posible ya que el primer número es menor o igual al segundo.");
}
