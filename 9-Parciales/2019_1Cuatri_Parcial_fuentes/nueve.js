function mostrar()
{
    var seguir;
    var pais;
    var habitantes;
    var temperatura;
    var contadorTempPares = 0;
    var menorHabitantes;
    var paisMenorHabi;
    var contadorPais = 0;
    var promedio;
    var acumuladorHabitantes = 0;
    var contadorPaises = 0;
    var minimo;
    var paisMinimo;
    var flag = 0;

    do {

        pais = prompt("Nombre del pais: ");

        habitantes = parseInt(prompt("Cantidad de habitantes del pais (1 a 7000): "));
        while ( habitantes < 1 || habitantes > 7000 || isNaN(habitantes)) {
            habitantes = parseInt(prompt("Error, numero invalido. Cantidad de habitantes del pais: "));
        }

        temperatura = parseInt(prompt("Que temperatura hay? (-50 a 50)"));
        while (temperatura < -50 || temperatura > 50 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Error, numero invalido. Que temperatura hay? (-50 a 50)"))
        }

        // Cantidad de temperatura pares...

        if ( temperatura % 2 == 0) {
            contadorTempPares++;
        }
        // Nombre de pais con menos habitantes...

        if ( flag == 0 || habitantes < menorHabitantes) {
            menorHabitantes = habitantes;
            paisMenorHabi = pais;
        }

        // Cantidad de paises que superan los 40º..

        if ( temperatura > 40) {
            contadorPais++;
        }

        // Promedio de habitantes entre los paises ingresados...

        acumuladorHabitantes = acumuladorHabitantes + habitantes;
        contadorPaises++;

        // La temperatura minima ingreasa y el nombre del pais...

        if ( flag == 0 || temperatura < minimo){
            minimo = temperatura;
            paisMinimo = pais;
            flag == 1;

        }

        seguir = prompt("Quieres continuar? (s o n): ");
    } while (seguir =='s');


    promedio = acumuladorHabitantes / contadorPaises;

    document.write("a) La cantidad de temperaturas pares : " + contadorTempPares + " </br>");
    document.write("b) El nombre del pais con menos habitantes : " + paisMenorHabi + " </br>");
    document.write("c) la cantidad de paises que superan los 40 grados. : " + contadorPais + " </br>");
    document.write("d) el promedio de habitantes entre los paises ingresados : " + promedio + " </br>");
    document.write("f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. : " + "temperatura: " + minimo + ", Pais: " + paisMinimo + " </br>");

}
/*
A / 200 / 35
B / 100 / 50
C / 500 / -15
D /  50 / 41 
 
*/