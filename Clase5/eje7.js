
function calculate(array7){
    var maxResult = array7[0]*array7[1];
    var n = array7.length;
    console.log(n);
    for(var i=2 ; i<n; i++){
        let partialRes = array7[i-1]*array7[i];
       // console.log(partialRes);
        if(partialRes>maxResult){
            maxResult=partialRes;
        }
    }

    console.log("El valor mas grande de la multiplicacion de adyacentes es: "+maxResult);

}

calculate([5,8,7,15,12,10,100]);