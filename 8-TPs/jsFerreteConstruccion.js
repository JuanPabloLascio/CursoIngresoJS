/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var radio = parseInt(document.getElementById("Radio").value);
    var perimetro;

    perimetro = ( largo * 2) + ( ancho * 2);

    alert("Se necesita " + perimetro * 3 +" metros, para dar 3 vueltas.");


}
function Circulo () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var radio = parseInt(document.getElementById("Radio").value);
    var perimetro = Math.floor(2 * Math.PI * radio);

    alert("Se necesita " + perimetro * 3 + " metros para dar 3 vueltas.");
	
}
function Materiales () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var radio = parseInt(document.getElementById("Radio").value);
    var area;
    var cemento;
    var cal;

    //AREA DEL RECTANGULO Base * Altura. 1*1 2 cemento y 3 cal

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    alert("Tu area es de " + area + " metros cuadrado. Necesitas " + cemento + " bolsas de cemento y " + cal + " de cal.");




}