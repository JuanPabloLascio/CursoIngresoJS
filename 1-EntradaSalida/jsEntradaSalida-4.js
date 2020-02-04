/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var apellido;

	nombre = prompt("Ingrese su nombre ");
	apellido = prompt("Ingresa tu apellido");

	document.getElementById("elNombre").value = nombre ;
	document.getElementById("elApellido").value = apellido ;

}
function alerta()
{
	// var nombre;
	// var apellido;

	nombre = document.getElementById("elNombre").value;
	apellido = document.getElementById("elApellido").value;

	alert(nombre + " " + apellido)
}

