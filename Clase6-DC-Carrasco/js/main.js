let artículo, answer;
let cantidad = 0, cantidadTotal = 0, total= 0; 
const productos = [] , carrito = [];

class Ropa{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

productos.push(new Ropa("Remera Negra", 29.99))
productos.push(new Ropa("Sweater Negro", 39.99))
productos.push(new Ropa("Remera Blanca", 34.99))
productos.push(new Ropa("Sweater Gris", 44.99))
productos.push(new Ropa("Remera Gris", 24.99))

//funcion que recorre el array productos para ver si existe el articulo a comprar
function encontrarRopa(arrayRopa, ropaAEncontrar) {
    for (ropa of arrayRopa) {
        if (ropaAEncontrar.toUpperCase() == ropa.nombre.toUpperCase()) return ropa;
    }
}

//funcion que recorre el array productos para retornar el indice donde se encuentra el producto a comprar
function encontrarIndice(arrayRopa, ropaAEncontrar) {
    for (ropa of arrayRopa) {
        if (ropaAEncontrar.toUpperCase() == ropa.nombre.toUpperCase()) return arrayRopa.indexOf(ropa);
    }
}

//funcion que pide al usuario la cantidad de unidades que quiere del producto 
function pedirCantidadArticulo(numero){
    unidades = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${numero}:`));
    if( unidades > 0){ 
        return unidades;
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        pedirCantidadArticulo();
    }
}

//funcion para imprimir los articulos comprados
function imprimirTicket() {
    alert(`Compraste ${cantidadTotal} de artículos y el total a pagar es de: $${total}`);
}

function ingresarArtículo() {
    artículo = prompt(`Escriba el nombre del artículo que desee comprar:
    1) Remera Negra $29.99.
    2) Sweater Negro $39.99.
    3) Remera Blanca $34.99.
    4) Sweater Gris $44.99.
    5) Remera Gris $24.99.`)

    let ropaEncontrada = encontrarRopa(productos, artículo);

    if (ropaEncontrada) {
        let indice = encontrarIndice(productos, artículo);
        
        //carrito.push({productos, unidades, precio});
        cantidad = pedirCantidadArticulo((indice + 1));
        total += cantidad * productos[indice].precio;
        cantidadTotal += cantidad;
        answer = confirm(`¿Deseas hacer otra compra?`);
    } else {
        alert("El producto no existe");
        ingresarArtículo();
    }
}

alert(`¡Bienvenidos a la tienda virtual de la banda TOOL!`)

//ciclo que ejecuta el algoritmo las veces que el usuario desee

do{
    ingresarArtículo();
}while(answer)

imprimirTicket();
