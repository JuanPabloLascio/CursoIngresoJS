/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centigrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centigrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit = parseInt(document.getElementById("Temperatura").value);
    var centigrados;

        //(32 °F − 32) × 5/9 
        centigrados = ( fahrenheit - 32) * 5/9;
        
    alert( fahrenheit + " Fahrenheit son " + centigrados + " centigrados")
	
}

function CentigradosFahrenheit () 
{
    var fahrenheit;
    var centigrados = parseInt(document.getElementById("Temperatura").value);

        //(32 C * 9/5) + 32
       fahrenheit = (centigrados * 9/5) + 32;
        
    alert( centigrados + " centigrados son " + fahrenheit + " fahrenheit.")
	
}
