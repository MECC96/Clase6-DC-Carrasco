let artículo, answer;
let cantidad = 0, total= 0; 
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
    cantidad = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${numero}:`));
    if( cantidad > 0){
        return cantidad;
    }else{
        alert("Dato ingresado inválido. Por favor, intente nuevamente.");
        pedirCantidadArticulo();
    }
}

//funcion para imprimir los articulos comprados
function imprimirTicket() {
    alert(`Compraste ${cantidad} de artículos y el total a pagar es de: $${total}`);
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
        
        carrito.push(productos[indice]);
        cantidad = pedirCantidadArticulo((indice + 1));
        total += cantidad * productos[indice].precio;
        cantidad += cantidad;
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










//Funcion que recibe el articulo que quieres comprar y retorna el total del valor
// function totalArticulo(){

//     artículo = prompt(`Seleccione la opción del artículo que desee comprar:
//     1) Remera Negra $29.99.
//     2) Sweater Negro $39.99.
//     3) Remera Blanca $34.99.
//     4) Sweater Gris $44.99.
//     5) Remera Gris $24.99.`);
    
//     if(artículo == (productos.length - 3)){ 

//         cantidad1 += pedirCantidadArticulo(artículo);
//         total1 += cantidad1* p1;
//         answer = confirm(`¿Deseas hacer otra compra?`);
        
//     }else if(artículo == (productos.length - 2)) {
        
//         cantidad2 += pedirCantidadArticulo(artículo);
//         total2 += cantidad2* p2;
//         answer = confirm(`¿Deseas hacer otra compra?`);
        
//     }else if(artículo == (productos.length - 1)) {
        
//         cantidad3 += pedirCantidadArticulo(artículo);
//         total3 += cantidad3* p3;
//         answer = confirm(`¿Deseas hacer otra compra?`);
        
//     }else if(artículo == (productos.length)) {
        
//         cantidad4 += pedirCantidadArticulo(artículo);
//         total4 += cantidad4* p4;
//         answer = confirm(`¿Deseas hacer otra compra?`);
        
//     }else if(artículo == (productos.length + 1)) {
        
//         cantidad5 += pedirCantidadArticulo(artículo);
//         total5 += cantidad5* p5;
//         answer = confirm(`¿Deseas hacer otra compra?`);
        
//     }else{
//         alert("Dato ingresado inválido. Por favor, intente nuevamente.");
//         totalArticulo();
//     }
//     return total = total1+total2+total3+total4+total5;
    
//     }

// //Funcion que pide la cantidad de unidades que desea comprar el usuario por articulo
// function pedirCantidadArticulo(){

//     cantidad = parseInt(prompt(`Ingrese la cantidad de unidades que desea del artículo ${artículo}:`));
//     if( cantidad > 0){
//         return cantidad;
//     }else{
//         alert("Dato ingresado inválido. Por favor, intente nuevamente.");
//         pedirCantidadArticulo();
//     }
// }

// alert(`¡Bienvenidos a la tienda virtual de la banda TOOL!`)

// //ciclo que ejecuta el algoritmo las veces que el usuario desee
// do{ 
//     totalArticulo();
// }while(answer)

// //mensaje con los totales parciales de cada articulo y el total de la compra
// alert(`${cantidad1} unidades del artículo 1: $${total1}
// ${cantidad2} unidades del artículo 2: $${total2}
// ${cantidad3} unidades del artículo 3: $${total3}
// ${cantidad4} unidades del artículo 4: $${total4}
// ${cantidad5} unidades del artículo 5: $${total5}
// El total a pagar es de: $${total}`);