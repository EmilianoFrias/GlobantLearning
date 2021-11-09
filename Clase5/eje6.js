var arreglo1 = [5,2,,10,15,20,50,72]; //defino array
arreglo1.sort(function(a, b){return a - b});//ordeno el array de menor a mayor
var pri = arreglo1.shift();//elimino el primer componete
console.log("El primer elemento mas chico es:",pri);
var seg = arreglo1.shift();//elimino el primer componete again
console.log("El segundo elemento mas chico es:",seg);
var sum = pri + seg; //sumo
console.log('La suma entre los mas pequeño es:' + sum);