var meses = [];
var i = 0;

function rellenaArray(){
    for(i = 1; i <= 12; i++){
        switch(i){
            case 1: meses[i] = "enero"; break;
            case 2: meses[i] = "febrero"; break;
            case 3: meses[i] = "marzo"; break;
            case 4: meses[i] = "abril"; break;
            case 5: meses[i] = "mayo"; break;
            case 6: meses[i] = "junio"; break;
            case 7: meses[i] = "julio"; break;
            case 8: meses[i] = "agosto"; break;
            case 9: meses[i] = "septiembre"; break;
            case 10: meses[i] = "octubre"; break;
            case 11: meses[i] = "noviembre"; break;
            case 12: meses[i] = "diciembre"; break;

        }
    }
}

function imprimeArray(){
    for(i = 1; i <= 12; i++){
       alert(meses[i]);
    }
}

rellenaArray();
imprimeArray();