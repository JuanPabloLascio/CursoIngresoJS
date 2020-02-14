function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;
	var minimo = 1;
	var maximo = 10;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (numero >= 9) {

		alert("Tu nota es " + numero + ", EXELENTE.");
	}
	else if ( numero < 4) {

		alert("Tu nota es " + numero + ", Vamos, la proxima se puede.");
	}
	else {

		alert("Tu nota es " + numero + ", APROBÓ");
	}

}//FIN DE LA FUNCIÓN