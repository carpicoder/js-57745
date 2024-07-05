// for
// let x = 0;
// for (x; x <= 10; x++) {

//     if (x === 6) {
//         break;
//     }

//     console.log("iteración " + x);
// }


// while

// console.log("Inicio");

// let x = 0; // inicializador
// while (x < 5) { // condición
//     console.log(x);
//     x = x + 1; // incrementador
// }

// let x = 0;
// while (x < 5) {
//     console.log(x);
//     x++;
// }

// do...while

// let y = 5;
// do {
//     console.log(y);
//     y = y + 1;
// } while (y < 5);

// console.log("Final");


// ejemplo

// let numero;

// do {
//     numero = parseInt(prompt("Ingrese un número"));
// } while (isNaN(numero));

// console.log(numero);

// let numero = parseInt(prompt("Ingresá un número"));
// while (isNaN(numero)) {
//     numero = parseInt(prompt("Número inválido, intentá otra vez."));
// }


// let x = 0;

// x = x + 1;
// x++;

// x = x - 1;
// x--;

// let cinco = 5;

// x = x + cinco;
// x += cinco;
// x -= cinco;
// x *= cinco;
// x /= cinco;

// console.log(x);


//! switch

// let dia = parseInt(prompt("Ingrese día de la semana en números"));

// if (dia === 1) {
//     console.log("Lunes");
// } else if (dia === 2) {
//     console.log("Martes");
// } else if (dia === 3) {
//     console.log("Miércoles");
// } else if (dia === 4) {
//     console.log("Jueves");
// } else if (dia === 5) {
//     console.log("Viernes");
// } else {
//     console.log("Día inválido");
// }

// switch (dia) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miércoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     default:
//         console.log("Día inválido");
// }

console.log(typeof(variable))