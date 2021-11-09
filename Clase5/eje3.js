var array3 = [5,14,17,8,9,100]; //defino array 
console.log("El array original es: ["+ array3 +"]");
function add(number){
    var n = array3.length
    for(var i = 0;i<n;i++){
        array3[i ]= array3[i]+number;  
    }
    console.log("El array sumado "+ number + " a cada componente es: ["+ array3 +"]");
}

add(10);