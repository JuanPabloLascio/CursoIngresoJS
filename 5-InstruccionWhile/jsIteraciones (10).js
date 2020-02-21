function mostrar()
{	
	var flag;
	var numero;
	var respuesta = 's';
	var positivo = 0;
	var negativo = 0;
	var cantp = 0;
	var cantn;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}
		if ( numero > 0 || flag == 0) {
			positivo = positivo + numero;
			cantp++;
		}
		if ( numero < 0 || flag == 0) {
			negativo = negativo + numero;
			cantn++;
		}

		
		respuesta = prompt("Quiere ingresar otro numero?");
	} while ( respuesta == 's');


	document.write()

}//FIN DE LA FUNCIÓN