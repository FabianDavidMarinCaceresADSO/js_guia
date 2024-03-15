/*3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
división, si el divisor es cero el programa debe mostrar un error, se debe manejar
mediante excepciones y el mensaje debe ser personalizado.*/
try {
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Al menos uno de los valores ingresados no es un número.");
  }

  if (numero2 === 0) {
    throw new Error("No se puede dividir por cero.");
  }

  let resultado = numero1 / numero2;
  console.log("El resultado de la división es:", resultado);
} catch (error) {
  console.error("Se produjo un error:", error.message);
}

