class Empresa {
    constructor(nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class Cliente{
    constructor(numCliente, dni, nombre, domicilio, cp, ciudad, provicia){
        this.numCliente = numCliente; 
        this.dni = dni; 
        this.nombre = nombre; 
        this.domicilio = domicilio; 
        this.cp = cp; 
        this.ciudad = ciudad;
        this.provicia = provicia;        
    }
}

class Producto{
    constructor(descripcion, precio, cantidad){
        this.descripcion = descripcion;
        this.precio = precio; 
        this.cantidad = cantidad;
    }
}

class Factura{
    constructor(empresa, cliente, productos, tipoDePago){
        this.empresa = empresa;
        this.cliente = cliente;
        this.productos = productos;
        this.tipoDePago = tipoDePago
        this.importeTotal = this.calcularImporteTotal(this.productos);
    }

    calcularImporteTotal(productos){
        var suma = 0; 
        for(let i = 0; i < productos.length ; i++){
            suma += productos[i].precio*productos[i].cantidad;
        }
        return suma;
    }

    imprimirImporteTotal(){
        document.write("<h3>Importe total: "+this.importeTotal+"</h3>")
    }
}
var productos = [new Producto("descripcion producto 1", 50.00, 10), new Producto("descripcion producto 2", 10.00, 20)];
var factura = new Factura(new Empresa("empresa1","calle segunda", 959865656, "50986456"), new Cliente(1, "12345678-Z", "pepe", "calle primera", 16461, "pueblo", "Sevilla"), productos, "contrarrembolso");

factura.imprimirImporteTotal();