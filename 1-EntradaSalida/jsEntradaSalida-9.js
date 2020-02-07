/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    /* 1 Conceguir suelto 
      sacar el dato de la caja de textos.
      hacerlos numeros enternos.

      2 calcular el aumento

      3 calcular el sueldo final

      4 mostrar el resultado*/

    var sueldo;
    var aumento;
    var sueldofinal;

    // 1 

    sueldo = document.getElementById("sueldo").value;
    sueldo = parseFloat(sueldo);

    //2
    aumento = (sueldo * 10) / 100;
    
    //3
    sueldofinal = sueldo + parseFloat(aumento);

    //4
    document.getElementById("resultado").value = sueldofinal;
    
}
