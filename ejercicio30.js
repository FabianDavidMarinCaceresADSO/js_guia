/*30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener
entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.*/
const fortaleza = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;

let contraseña = prompt("ingrese una contraseña la contraseña debe tener entre 8 y 12 caracteres y almenos una mayuscula, una minuscula y digito")

if (fortaleza.test(contraseña)){

    alert(`contraseña aceptada`)


}

else{
    alert("contraseña no valida")
}