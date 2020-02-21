function mostrar()
{

	var contador = 0;
	var promedio;
	var acumulador;
	var suma = 0;
	//De esta forma me funciona bien..
	/*var num1 = parseInt(prompt("Ingrese un numero"));
	var num2 = parseInt(prompt("Ingrese un numero"));
	var num3 = parseInt(prompt("Ingrese un numero"));
	var num4 = parseInt(prompt("Ingrese un numero"));
	var num5 = parseInt(prompt("Ingrese un numero"));

	promedio = num1 + num2 + num3 + num4 + num5;*/

	acumulador = parseInt(prompt("Ingrese un numero:"));

	while ( contador < 5 ) {
		acumulador = parseInt(prompt("Ingrese otro numero:"));
		contador = contador + 1;
		suma = suma + acumulador;


	}

	promedio = suma / 5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN