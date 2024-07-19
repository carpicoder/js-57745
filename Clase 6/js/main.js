// let string = "Carpi";
// let number = 12155;
// let boolean = true;
// let object = {
//     nombre: "Silla",
//     precio: 3000,
//     color: "Negro"
// }

// let productos = ["Silla", "Sillón", "Mesa"];
// let numeros = [12, 1, 5, 8, 24];
// let bool = [true, false, false, true, false];
// let mezcla = ["Silla", 15, true, "Carpi"];
// let usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Nico",
//         edad: 25
//     }
// ]

// console.log(numeros[2]);
// console.log(usuarios[0]);
// console.log(productos);

// let usuarioParaVer = parseInt(prompt("Ingresá de qué usuario querés ver la edad. 0. Carpi, 1. Nico"));

// console.log(usuarios[usuarioParaVer].edad);


//! Recorrer un Array!

// let productos = ["Silla", "Sillón", "Mesa", "Ventana", "Puerta"];
//                 0          1         2        3        4     

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

// console.log(productos[productos.length - 1]);

//! Métodos de Arrays :)

//? push: agrega un elemento al final del array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// productos.push("Puerta");
// console.log(productos);

//? unshift: agrega un elemento al comienzo del array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// productos.unshift("Puerta");
// console.log(productos);

//? pop: elimina el último elemento del array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// let productoEliminado = productos.pop();
// console.log(productos);
// console.log(productoEliminado);

//? shift: elimina el primer elemento del array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// let productoEliminado = productos.shift();
// console.log(productos);
// console.log(productoEliminado);

//? splice: elimina uno o más elementos del array en cualquier posición
//? primer parámetro: índice del primer elemento a eliminar
//? segundo parámetro: cantidad de elementos a eliminar
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
//                 // 0         1        2         3

// productos.splice(0, 1);
// console.log(productos);

//? join: genera string con todos los elementos del array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// console.log( productos.join("/") );

//? concat: combina dos arrays en uno
// let muebles = ["Silla", "Sillón", "Mesa"];
// let aberturas = ["Puerta", "Ventana"];

// let productos = muebles.concat(aberturas);

// console.log(productos)

//? slice: genera una copia de una parte de un array, en otro nuevo array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// //                  0        1        2         3 
// let productosReducido = productos.slice(1, 4);
// console.log(productos)
// console.log(productosReducido)

//? indexOf: retorna el índice de un elemento del array
//? pero si no lo encuentra, retorna -1
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];

// let indice = productos.indexOf("Sillón");
// productos.splice(indice, 1);
// console.log(productos);

// console.log( productos.indexOf("Mesa") );

//? includes: retorna un booleano respondiendo si el elemento está en el array o no

// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];

// console.log( productos.includes("Sillón") );
// console.log( productos.includes("Puerta") );

// if (productos.includes("Sillón")) {
//     let indice = productos.indexOf("Sillón");
//     productos.splice(indice, 1);
// }

//? reverse: invierte el orden de los elementos de un array
// let productos = ["Silla", "Sillón", "Mesa", "Ventana"];
// productos.reverse();
// console.log(productos);


//! Ejemplo: cargar array por parte del usuario

// const listaNombres = [];
// let cantidad = 5;

// do {
//     let entrada = prompt("Ingresá un nombre");
//     listaNombres.push(entrada);
//     console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// console.log(listaNombres);

//! Ejemplo: eliminar cualquier elemento

// const nombres = ["Maxi", "José", "Miguel", "Victor", "Karen", "Carla"];

// const eliminar = (nombre) => {
//     let indice = nombres.indexOf(nombre);

//     if (indice != -1) {
//         nombres.splice(indice, 1);
//     } else {
//         alert("Ese nombre no existe en el Array");
//     }
// }

// eliminar(prompt("Ingresá un nombre para eliminar"));
// console.log(nombres);


//! arrays de objetos

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 29
// }

// const usuario2 = {
//     nombre: "Karen",
//     edad: 31
// }

// const usuarios = [
//     {
//         nombre: "Octavio",
//         edad: 22
//     },
//     usuario1
// ]

// usuarios.push(usuario2);
// usuarios.push({
//     nombre: "José",
//     edad: 33
// })

// for (let usuario of usuarios) {
//     console.log(usuario.nombre);
// }