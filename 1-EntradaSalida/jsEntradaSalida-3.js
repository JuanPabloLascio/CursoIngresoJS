/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //Creo las variable
    var nombre;
    var apellido;
    //asigno a la variable nombre el valor escrito en la caja de texto
    // nombre es la variable / document.getElementById toma el documento dentro de la caja de texto / value hace la accion de comparar
    nombre = document.getElementById("elNombre").value;
    apellido = document.getElementById("elApellido").value;
    
    alert("Su nombre es " + nombre + " " + apellido);
}


