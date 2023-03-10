class Circulo {
    constructor(radio){
        this.radio = radio;
        this.area = this.calculaArea(radio);
    }

    calculaArea(radio){
        return Math.PI * Math.pow(this.radio, 2);
    }

    imprimeInfo(){
        document.getElementById('circulo').innerHTML = "<p>Area: " + this.area + "</p>";
    }
}

function creaCirculo(radio){
    var circulo = new Circulo(radio);
    console.log(circulo);
    circulo.imprimeInfo();
}



