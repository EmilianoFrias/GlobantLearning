var array2 = ['a','b','c','d','e','f'];
//console.log(array2);

function modify(array2){
    
    var n = array2.length; //Calculo la cantidad de componentes del vector
    console.log("Cantidad de componentes del array: "+n); //muestro la cantidad 

    if(n>5){  //verifico si cumple la condicion 
    array2.splice(n-3,n); //con splice elimino desde la posicion n-3 hasta la posicion n
    console.log("Array modificado: [" + array2+"]"); //muestro como quedo
    }
    else{
    console.log("El array ingresado debe ser superior a 5 componentes "); //si no se cumple se muestra esto
    }
}

modify(array2);
