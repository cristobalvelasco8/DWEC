function compruebaCadena(cadena){
    let mayus = false;
    let minus = false;
    for(let i = 0; i < cadena.length; i++){
        let num = cadena.charCodeAt(cadena.substring(i, i+1));
        if(num >= 65 && num <= 90){
            mayus = true;
        }
        if(num >= 97 && num <= 122){
            minus = true;
        }
    }
    if(mayus && minus){
        document.getElementById('comprobacion').innerHTML = "<p>Hay mayusculas y minusculas</p>";
    }

    if(!minus && mayus){
        document.getElementById('comprobacion').innerHTML = "<p>Hay mayusculas</p>";

    }

    if(minus && !mayus){
        document.getElementById('comprobacion').innerHTML = "<p>Hay minusculas</p>";
 
    }
    
}