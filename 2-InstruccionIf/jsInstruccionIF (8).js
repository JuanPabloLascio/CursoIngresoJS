function mostrar()
{
//tomo la edad  
var edad
var estado
var select

edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;


    if (edad > 17 ) {
        
        switch (estado) {

            case "Soltero" :
                alert("Es soltero y no es menor de edad");
        }
    }    



}//FIN DE LA FUNCIÓN