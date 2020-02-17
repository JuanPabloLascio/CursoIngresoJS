function mostrar()
{

    var sexo;
	sexo = prompt("ingrese F o M").toLowerCase();

	 while (!( sexo == "f" || sexo == "m")) {
		sexo = prompt("Respuesta incorrecta. Ingrese su sexo F o M.").toLowerCase();
	 }

	 document.getElementById("Sexo").value = sexo; 


}//FIN DE LA FUNCIÓN