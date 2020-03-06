function mostrar()
{

    var kilos;
    var sabor;
    var pasar = 0;
    var acumuladorKilos = 0;
    var promedio;
    var promedioCarnes;
    var kilosliviano;
    var saborliviano;
    var flag = 0;
    var contadorCarne = 0;
    var acumuladorCarnes = 0;

    while ( pasar < 10) {
        kilos = parseInt(prompt("Cuantos kilos: (0 a 500)"));
        while (isNaN(kilos) || kilos < 0 || kilos > 500) {
            kilos = parseInt(prompt("Error. Cuantos kilos: (0 a 500)"));
        }
        sabor = prompt("Que sabor: (Carne, Vegetales, Pollo)"); 
        while (!(sabor == "Carne" || sabor == "Vegetales" || sabor == "Pollo")) {
            sabor = prompt("Error. Que sabor: (Carne, Vegetales, Pollo)");
        }

        if (flag == 0 || kilos < kilosliviano) {
            kilosliviano = kilos;
            saborliviano = sabor;
            flag++;
        }
        if ( sabor == "Carne") {
            contadorCarne++;
            acumuladorCarnes = acumuladorCarnes + kilos;
        }
        pasar++;
        acumuladorKilos = acumuladorKilos + kilos;

    }

    // Promedio de kilos totales...

    promedio = acumuladorKilos / 10;

    // Promedio de kilos sabor Carne...

    promedioCarnes = acumuladorCarnes / contadorCarne;

    alert("El promedio de los kilos totales: " + promedio + "k");
    alert("El mas liviano y su sabor: " + kilosliviano + "k" + " " + saborliviano);
    alert("La cantidad de sabor carne y el promedio de kilos de sabor carne: " + contadorCarne + " " + promedioCarnes + "k");



    /*
    a) El promedio de los kilos totales.
    b) El mas liviano y su sabor
    c) La cantidad de sabor carne y el promedio de kilos de sabor carne

    100 Carne
    200 Carne
    300 Pollo
    */


}
