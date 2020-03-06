function mostrar()
{

var centimetros;
var sexo;
var pasar = 0;
var promedio;
var acumuladorAlturas = 0;
var sexoAlturas;
var alturaBaja;
var contadorMujeresAltas = 0;
var flag1 = 0;

// Preguntar por promp 5 veces ..

while ( pasar < 5 ) {

    centimetros = parseInt(prompt("Que altura tiene? (0 a 250 cm)"));
    while ( isNaN(centimetros) || centimetros < 0 || centimetros > 250) {
        centimetros = parseInt(prompt("Altura invalida. Que altura tiene? (0 a 250 cm)"));
    }
    sexo = prompt("Que sexo es? (m o f)");
    while (sexo != 'm' && sexo != 'f' && sexo != 'F' && sexo != 'M') {
        sexo = prompt("Error. Que sexo es? (m o f)");
    }
    acumuladorAlturas = acumuladorAlturas + centimetros;
    pasar++;

        // Sacar cantidad de mujeres altas
        if ((flag1 == 0 || sexo == 'f' || sexo == 'F') && centimetros >= 190) {
            contadorMujeresAltas++;
            alert("2")
        }

    //Sacar altura mas baja con sexo ..

    if (flag1 == 0 || centimetros < alturaBaja) {
        alturaBaja = centimetros;
        sexoAlturas = sexo;
        flag1++;
        alert("1")
    }


}

// Sacar promedio

promedio = acumuladorAlturas / 5;

alert("El promedio de las alturas totales: " + promedio + " </br> La altura más baja " + acumuladorAlturas + " el sexo de esa persona: " + sexoAlturas + " </br> La cantidad de muheres que su altura supere los 190 centimetros: " + contadorMujeresAltas);




}
/*
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.

5 f
6 m
7 f
8 m
190 f


*/