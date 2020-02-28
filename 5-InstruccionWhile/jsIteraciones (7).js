function mostrar()
{

	var contador=0;
	var numero=0;
	var acumulador=0;
	var respuesta;
	
	do {

		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, Ingrese un numero:"))
		}
	
		acumulador = acumulador + numero;

		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro numero?");
	} while ( respuesta == 's')



document.getElementById('acumulador').value=acumulador;
document.getElementById('promedio').value=numero/contador;

}//FIN DE LA FUNCIÓN