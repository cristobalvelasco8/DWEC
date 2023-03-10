// obtener el nº de enlaces del documento
let numenlaces=document.querySelectorAll("a").length;

console.log(`El número de enlaces del documento es ${numenlaces}`);
document.write(`a) El número de enlaces del documento es ${numenlaces}`);


// dirección del penúltimo enlace del documento
let penultimoEnlace=document.querySelectorAll("a")[document.querySelectorAll("a").length-2]
console.log(` La dirección del penúltimo enlace del documento es ${penultimoEnlace}`);
document.write("</br>")
document.write(`b) La dirección del penúltimo enlace del documento es ${penultimoEnlace}`);

//nº enlaces tercerparrafo

let tercerparrafo=document.querySelectorAll("p")[2];
let numEnlacesTercerParrafo=tercerparrafo.querySelectorAll("a").length;
console.log(` El numero del tercer pararfo es ${numEnlacesTercerParrafo}`);
document.write("</br>")
document.write(`c) El numero de enlaces del tercer pararfo es ${numEnlacesTercerParrafo}`);
