function mostrar()
{
//tomo la edad  
var edad
var estadoCivil
edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

if ( edad >= 18 ) {
    alert("Tiene " + edad + " y esta " + estadoCivil);
}
else {
    alert(" Es muy pequeño para NO ser " + estadoCivil)
}

}//FIN DE LA FUNCIÓN