function mostrar()
{

    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedio;
    var acumuladorNegativos = 0;
    var flag = 0;
    var minimo;
    var minimoletra;
    var maximo;
    var maximoletra;

    do {

        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Error. Ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100:"));
        while (isNaN(numero) || numero < -100 || numero > 100){
            numero = parseInt(prompt("Error. Ingrese un numero entre -100 y 100:"));
        }

        // Cantidad de numero pares...
        if ( numero % 2 == 0 ) {
            contadorPares++;

        }
        else {
            contadorImpares++;

        }

        if ( numero == 0){
            contadorCeros++;
        }
        // Numero positivos y negativos ..
        if (numero >= 0){
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;
        }
        else {
            acumuladorNegativos = acumuladorNegativos + numero;
        }

        // Numero maximo y minimo...
        if (flag == 0 || numero < minimo) {
            minimo = numero;
            minimoletra = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            maximoletra = letra;
            flag = 1;
        }
            seguir = prompt("Queres seguir? (s o n)");
    } while (seguir == 's' || seguir == 'S');

    // Promedio de numero positivos..
    promedio = acumuladorPositivos / contadorPositivos;

    document.write("a) La cantidad de números pares: " + contadorPares + ". </br>");
    document.write("b) La cantidad de números impares " + contadorImpares + ". </br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + ". </br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedio + ". </br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNegativos + ". </br>");
    document.write("f) El número y la letra del máximo " + maximo + " " + maximoletra + ". </br>");
    document.write("f) El número y la letra del minimo " + minimo + " " + minimoletra + ". </br>");


 /*
 a) La cantidad de números pares.

c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

a 100
b 50
c-53
d -100
e 0
*/


}
