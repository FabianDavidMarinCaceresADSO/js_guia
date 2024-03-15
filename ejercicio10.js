/*10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.Los
ingredientes para cada tipo de pizza aparecen a continuación.
  a.Ingredientes vegetarianos: Pimiento y tofu.
    b.Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
función de su respuesta le muestre un menú con los ingredientes disponibles para que
elija.Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas las pizzas.Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
o no y todos los ingredientes que lleva */


let pizza = prompt("¿Quiere una pizza vegetariana o una pizza normal")

let ingrediente = "";

if (pizza === "vegetariana") {

  alert("Los ingredientes disponibles para la pizza vegetariana son: pimiento Y tofu")
  let ingrediente = prompt("selecione sus ingredientes ")
}


else if (pizza === "normal") {

  alert("Los ingredientes disponibles para la  pizza normal son: Pepperoni, Jamon y Salmon")
  let ingrediente = prompt("Los ingredientes disponibles para la pizza normal son: pimiento Y tofu")
}


alert(`La pizza que eligio es ${pizza} y los ingrdientes que eligio fuero: ${ingrediente}`)