function imprimeCuatrimestreActual(){
    let mes = new Date().getMonth();

    if(mes >= 1 && mes <= 4){
        document.write("Estamos en el primer Cuatrimestre");
    }

    if(mes >= 5 && mes <= 8){
        document.write("Estamos en el segundo Cuatrimestre");
    }

    if(mes >= 9 && mes <= 12){
        document.write("Estamos en el tercer Cuatrimestre");
    }
}

imprimeCuatrimestreActual();