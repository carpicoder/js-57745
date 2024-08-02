//! VALORES BOOLEANOS
//? true / false

//! COMPARACIONES
//? ==           Es igual
//? ===          Es estrictamente igual
//? !=           Es distinto
//? !==          Es estrictamente distinto
//? < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

//? &&           Operador AND (y)
//? ||           Operador OR (o)
//? !            Operador NOT (no)

// let numero = 5;

// //1
// if (numero == 5) {
//     console.log("Es igual a 5.");
// }

// //2
// if (numero == 6) {
//     console.log("Es igual a 6.");
// }

// //3
// if (numero > 0) {
//     console.log("Es mayor a 0.")
// }

// //4
// if (numero < 100) {
//     console.log("Es menor a 100.")
// }

// .toLowerCase()
// .toUpperCase()

// let clima = prompt("Ingrese el clima de hoy").toLowerCase();

// if (clima == "soleado") {
//     console.log("☀️");
// } else if (clima == "nublado") {
//     console.log("⛅");
// } else if (clima == "tormentoso") {
//     console.log("⛈️")
// } else {
//     console.log("No sé cómo está afuera 🫠.")
// }

// console.log("hOlAgEnTeCoMoEsTaN".toLowerCase());


// let numero = 10;
// let mayorA5 = numero > 5;

// if (mayorA5) {
//     console.log("Es mayor a 5");
// }

// console.log("final");

//? estrictamente igual ===
//? estrictamente distinto !==
//? comparan valor y tipo de dato (number y string)
// console.log(5 === "5");

// let nombre = prompt("Ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");

//? OR || chequea si alguna de las condiciones son true

// if (nombre === "" || apellido === "") {
//     alert("Nombre o apellido inválidos");
// } else {
//     alert("Nombre: " + nombre + " " + apellido);
// }

//? AND && chequea si todas las condiciones son true

// if (nombre === "" && apellido === "") {
//     alert("Nombre o apellido inválidos");
// } else {
//     alert("Nombre: " + nombre + " " + apellido);
// }

// let condicion = 6 > 7;

// if (!condicion) {
//     console.log("es false");
// }


//! ACTIVIDAD EN CLASE

//! actividad 1

// let numero = parseInt(prompt("Ingresá un número"));
// if (numero > 1000) {
//     alert("🌈");
// }

//! actividad 2

// let texto = prompt("Ingresá un texto");
// if (texto.toLowerCase() === "hola") {
//     console.log("Ingresaste " + texto);
// }

// console.log( parseFloat(parseFloat("15.359565").toFixed(2)) )

//! actividad 2

// let numero = parseInt(prompt("Ingresá un número entre 10 y 50"));

// if (numero >= 10 && numero <= 50) {
//     alert("¡Perfecto! Tu número " + numero + " está entre 10 y 50");
// } else {
//     alert("Número incorrecto");
// }

// if (numero < 10 || numero > 50) {
//     alert("Número incorrecto");
// } else {
//     alert("¡Perfecto! Tu número " + numero + " está entre 10 y 50");
// }