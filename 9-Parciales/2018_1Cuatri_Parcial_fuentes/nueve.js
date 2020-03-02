function mostrar()
{
    var producto;
    var peso;
    var temperatura;
    var seguir;
    var temperaturaPares = 0;
    var pesoMaspesado;
    var productoMax;
    var contadorProductosmenorgrados = 0;
    var acumuladorPeso = 0;
    var contadorProducto = 0;
    var promedio;
    var maximo;
    var minimo;
    var flag = 0;


    //------ Pido datos mientras que el usuario quiera-------
    do {
        //------Producto------
        producto = prompt("Marca del producto?");
        //-----Peso del producto------
        peso = parseInt(prompt("Cuanto pesa? (1 a 100): "));
        while (isNaN(peso) || peso < 1 || peso > 100 ) {
            peso = parseInt(prompt("Error, numero invalido. Cuanto pesa? (1 - 100): "));
        }
        //-------Temperatura del producto---------
        temperatura = parseInt(prompt("Que temperatura tiene? (-30 a 30)"));
        while ( isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Error, numero invalido. Que temperatura tiene? (-30 a 30)"));
        }
        // A ------------ Teperatura pares ----------
        if (!(temperatura % 2 != 0)) {
            temperaturaPares++;
        }

        // B ------ Marca mas pesada > 0 --------

        if ( (flag == 0 || peso > pesoMaspesado) && temperatura > 0) {
            productoMax = producto;
            pesoMaspesado = peso;
        }

        // C -------- Cantidad de productos que se concerban a menos de 0 ------

        if ( temperatura < 0) {
            contadorProductosmenorgrados++;
        }

        // F El peso maximo y minimo
        if ( flag == 0 || peso < minimo) {
            minimo = peso;
        }


        if ( flag == 0 || peso > maximo) {
            maximo = peso;
            flag = 1;

        }

        // D -- Contador de peso y productos --

        acumuladorPeso = acumuladorPeso + peso;
        contadorProducto++;




        seguir = prompt("Quieres continuar? ( s o n)");
    }while (seguir == 's');

    // ------- Promedio -------

    promedio = acumuladorPeso / contadorProducto;

    document.write("a) La cantidad de temperaturas pares " + temperaturaPares + "</br>");
    document.write("b) La marca del producto más pesado que no sea congelado > 0. " + productoMax + " " + pesoMaspesado + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados. " + contadorProductosmenorgrados + "</br>");
    document.write("d) El promedio del peso de todos los productos. " + promedio + "</br>");
    document.write("El peso máximo " + maximo + " y el mínimo. " + minimo + "</br>");

   /* Testeo ------
   F / 10 / 15
   A / 15 / -10
   B / 20 / 1
   C / 30 / -2S
   */

}
