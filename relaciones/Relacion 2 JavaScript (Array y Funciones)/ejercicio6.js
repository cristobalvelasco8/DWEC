function imprimeMenorDeTres(num1, num2, num3){
    let menor = num1;

    if(num2 < menor){
        menor = num2;
    }else{
        if(num3 < menor){
            menor = num3;
        }
    }
    document.getElementById('menor').innerHTML = "<h3>El menor de los tres el elemento "+menor+"</h3>";
}