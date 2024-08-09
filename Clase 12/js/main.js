// let numero = 1;
// numero = numero + 1;
// numero++;


//! Operador ternario

// console.log(numero);

// let temperatura = 31;

// if (temperatura > 30) {
//     console.log("Caluroso");
// } else {
//     console.log("Frío");
// }

// temperatura > 30 ? console.log("Caluroso") : console.log("Frío");

// console.log(temperatura > 30 ? "Caluroso" : "Frío");

// let temperatura = 31;

// let comoEstaElDia;

// if (temperatura > 30) {
//     comoEstaElDia = "Caluroso";
// } else {
//     comoEstaElDia = "Frío";
// }

// let comoEstaElDia = temperatura > 30 ? "Caluroso" : "Frío";

// console.log(comoEstaElDia);

//! Operador AND

// let temperatura = 5;

// if (temperatura > 30) {
//     console.log("Hace calor");
// } 

// temperatura > 30 && console.log("Hace calor");

// let comoEstaElDia;
// if (temperatura > 30) {
//     comoEstaElDia = "Hace calor";
// }

// let comoEstaElDia = temperatura > 30 && "Hace calor";
// console.log(comoEstaElDia);

//! Operador OR
/*//? VALORES FALSY
null
undefined
false
NaN
0
""
//? VALORES TRUTHY
todos los que no son falsy
*/

// let temperatura = 31;

// let comoEstaElDia = "" || "Hace calor";

// console.log(comoEstaElDia);

// console.log(0 || "Falsy"); // Falsy
// console.log(40 || "Falsy"); // 40
// console.log(null || "Falsy"); // Falsy
// console.log(undefined || "Falsy"); // Falsy
// console.log("Hola!" || "Falsy"); // Hola
// console.log("" || "Falsy"); // Falsy
// console.log(NaN || "Falsy"); // Falsy
// console.log(true || "Falsy"); // true
// console.log(false || "Falsy"); // Falsy


// const usuario1 = {
//     nombre: "Carpi",
//     edad: 29
// }

// let usuario2 = undefined;

// console.log( usuario1 || "El usuario no existe" );
// console.log( usuario2 || "El usuario no existe" );


//! ejemplo operador OR

// let carrito;
// let carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito"));
// if (carritoEnLocalStorage) {
//     carrito = carritoEnLocalStorage;
// } else {
//     carrito = [];
// }

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito);

//! operador NULLISH

// console.log(0 ?? "Nullish"); // 0
// console.log(40 ?? "Nullish"); // 40
// console.log(null ?? "Nullish"); // Nullish
// console.log(undefined ?? "Nullish"); // Nullish
// console.log("Hola!" ?? "Nullish"); // Hola!
// console.log("" ?? "Nullish"); // ""
// console.log(NaN ?? "Nullish"); // NaN
// console.log(true ?? "Nullish"); // true
// console.log(false ?? "Nullish"); // false

//! Acceso condicional a un objeto

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 29,
//     cursos: {
//         desarrolloweb: "aprobado",
//         javascript: "en curso"
//     }
// }

// console.log(usuario1?.trabajos?.coderhouse || "Lo que sea")

//! Desestructuración de OBJETOS

// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
// }

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// let { nombre: apodo, edad } = usuario;

// console.log(apodo, edad);


// function mostrarEnConsola(persona) {
//     const { nombre, edad } = persona;
//     console.log(nombre, edad);
// }

// mostrarEnConsola(usuario);

// function mostrarEnConsola({ nombre, edad }) {
//     console.log(nombre, edad);
// }

// mostrarEnConsola(usuario);

//! Desestructuración de ARRAYS

// const nombres = ["Lucas", "Diego", "Facu", "Emi"];

// const [a, , , d] = nombres;

// console.log(c);