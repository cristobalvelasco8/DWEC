var array = [6, "pepe", 2, "juan"];

function operacionesBasicas(){
    var suma = 0; 
    for(i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            for(j = i+1; j < array.length; j++){
                if(!isNaN(array[j])){
                    document.write("<h2>Operaciones Basicas</h2>");
                    document.write("<h4>La suma es: " + (array[i]+array[j])  + "</h4>");
                    document.write("<h4>La resta es: " + (array[i]-array[j])  + "</h4>");
                    document.write("<h4>La multiplicacion es: " + (array[i]*array[j])  + "</h4>");
                    document.write("<h4>La division es: " + (array[i]/array[j])  + "</h4>");
                }
            }
        }
    }
}

operacionesBasicas();