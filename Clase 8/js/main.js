// console.log( Math.PI );
// console.log( Math.E );

//! max y min

// console.log( Math.max(12, 5, 44, 38, 99, 1) );
// console.log( Math.min(12, 5, 44, 38, 99, 1) );

// console.log( Math.max(12, 5, 44, 38, 99, 1, Infinity) );
// console.log( Math.min(12, 5, 44, 38, 99, 1, -Infinity) );

// const numeros = [12, 5, 44, 38, 99, 1];

// console.log(numeros.reduce((acc, num) => acc < num ? acc : num, Infinity))
// console.log(numeros.reduce((acc, num) => acc > num ? acc : num, -Infinity))

// const numero = 3.9999999999;

//! ceil = techo
//! floor = suelo
//! round = redondear

// console.log( Math.ceil(numero) );
// console.log( Math.floor(numero) );
// console.log( Math.round(numero) );

//! sqrt = square root = raíz cuadrada

// console.log( Math.sqrt(81) );

//! random = aleatorio

// console.log( Math.floor(Math.random() * 11 + 10) );
// console.log( Math.floor(Math.random() * 3 + 1) );
// console.log( Math.floor(Math.random() * 2 + 5) );


// 10 11 12 13 14 15 16 17 18 19 20
// 1  2  3  4  5  6  7  8  9  10 11


// 1 2 3
// 1 2 3

// 5 6
// 1 2


// function generarNumeroRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const generarNumero = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// console.log(generarNumeroRandom(59, 88));

//! FECHAS !!1

// const fechaNavidad = new Date("December 24, 2024, 23:59:59");
const fechaMundial = new Date(2022, 11, 18);


const hoy = new Date(2024, 6, 26);
const navidad = new Date(2024, 11, 25);
const msPorDia = 86400000;

// console.log(fechaMundial);
// console.log(fechaMundial.getMonth()); // mes
// console.log(fechaMundial.getFullYear()); // año
// console.log(fechaMundial.getDay()) // día de la semana en formato número (domingo es 0, sábado es 6)

// console.log(fechaMundial.toDateString());
// console.log(fechaMundial.toLocaleString());
// console.log(fechaMundial.toLocaleDateString("zh-CN"));
// console.log(fechaMundial.toTimeString());

//! 1A 7M 8D 
//! 586 Dias
//! 83.7 Semanas
//! 19.3 Meses
//! 50630400000 milisegundos

console.log( (navidad - hoy) / 1000 / 60 / 60 / 24 );

console.log( new Date(-8640000000000000) );