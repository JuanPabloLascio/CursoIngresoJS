function mostrar()
{
//tomo la edad  

var edad
edad = document.getElementById("edad").value;

/*if ( edad >= 13 && edad <=17){
    alert("Es adolecente");
}*/

// Otra forma de hacerlo, esta seria la inversa..

if (!(edad < 13 || edad > 17)){
    alert("Es adolecente");
}



}//FIN DE LA FUNCIÓN