var numeros = []; 

function rellenaArray(){
    var i = 0; 
    while(i < 3000){
        if(i % 11 == 0){
            numeros.push(i);
        }
        i++;
    }
}

function imprimeArray(){
    var i = 0;
    var suma = 0;
    document.write("<h2>Multiplos de 11 menores de 3000: </h2><br>");
    for(i = 0; i < numeros.length; i++){
        document.write(i + ", ");
        suma += i;
    }

    document.write("<br><br><h3>La suma es: " + suma + "</h3>");
}

rellenaArray();
imprimeArray();
