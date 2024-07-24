//! FUNCIONES DE ORDEN SUPERIOR

// function sumarRango(min, max) {
//     let total = 0;
    
//     for (let i = min; i <= max; i++) {
//         total = total + i;
//     }

//     return total;
// }


// console.log(sumarRango(1, 10));


//? EJEMPLO VARIABLE / RETURN

// const nombre = "Carpi";

// const mostrarNombre = () => {
//     return 1;
// }

// console.log(mostrarNombre() + 1);

// //! métodos!!!

// const numeros = [50, 12, 37, 17, 25, 6];
// const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
// const productos = [
//     { nombre: "Mesa", precio: 3500 },
//     { nombre: "Silla de plástico", precio: 2000 },
//     { nombre: "Silla de madera", precio: 2500 },
//     { nombre: "Ventana", precio: 4500 },
//     { nombre: "Puerta", precio: 3000 }
// ];


//! forEach => recorre el array y nos permite ejecutar alguna/s acción/es sobre los elementos

// numeros.forEach((numero) => {
//     console.log(numero);
// })

//! find => recorre el array y devuelve el primer elemento que coincida con la condición que le damos

// const animalEncontrado = animales.find((animal) => animal === "Tortuga");
// console.log(animalEncontrado);

// const productoEncontrado = productos.find(prod => prod.precio > 4000)
// console.log(productoEncontrado);

//! filter => recorre el array y devuelve un array nuevo con todos los elementos que coincidan con la condición

// const productosEncontrados = productos.filter(prod => prod.precio > 4000);
// console.log(productosEncontrados);


//! some => recorre el array y deuvelve un booleano true si la condición se cumple en algún elemento, false si no se cumple en ninguno

// const cisne = animales.some(animal => animal === "Cisne");
// console.log(cisne);

// const caballo = animales.some(animal => animal === "Caballo");
// console.log(caballo);

//! map => recorre el array y retorna un nuevo array con la misma cantidad de elementos que el original, pero extrayendo / modificando los datos que necesitemos

// const titulos = productos.map(prod => prod.nombre);
// console.log(titulos);

//! reduce => retorna un valor único (reducido) de nuestro array tras recorrerlo

// const total = numeros.reduce((acc, num) => num + acc, 0);
// console.log(total);

// const total = productos.reduce((acc, prod) => prod.precio + acc, 0);
// console.log(total);

// const numeros = [50, 12, 37, 17, 25, 6];
// const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
// const productos = [
//     { nombre: "Mesa", precio: 3500 },
//     { nombre: "Silla de plástico", precio: 2000 },
//     { nombre: "Silla de madera", precio: 2500 },
//     { nombre: "Ventana", precio: 4500 },
//     { nombre: "Puerta", precio: 3000 }
// ];

//! sort => reordena el array según el orden que necesitemos!

// numeros.sort((a, b) => b - a);
// console.log(numeros);

// productos.sort((a, b) => a.precio - b.precio);
// console.log(productos);

// productos.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     }
//     if (a.nombre < b.nombre) {
//         return -1;
//     }
//     return 0;
// })

// console.log(productos);
