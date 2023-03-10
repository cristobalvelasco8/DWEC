var numeros = [];
var i = 0;
var suma = 0;
numerosTexto = "";
function guardaNumero(num){
    if(numeros.length < 10){
        numeros.push(num-0);
        numerosTexto += num + ", ";
        imprimeSumaNumeros();
    }else{
        document.getElementById('suma').innerHTML = "<h3>" + suma +", has llegado al limite de numero introducidos</h3><br><h3>"+numerosTexto+"</h3>";
    }
    
    
    
}

function imprimeSumaNumeros(){
    suma = 0;
    
    for(i = 0; i < numeros.length; i++){
       suma = suma - 0 + numeros[i];
       
    }
    document.getElementById('suma').innerHTML = "<h3>" + suma +"</h3><br><h3>"+numerosTexto+"</h3>";
}