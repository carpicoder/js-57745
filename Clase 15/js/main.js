// setTimeout(funcion, tiempo);

// console.log("Hola, mundo!");

// setTimeout(() => {
//     console.log("Tardo 3000!");
// }, 3000);

// setTimeout(() => {
//     console.log("Tardo cero!");
// }, 0);

// console.log("Chau, mundo!");


// siempre lo asincrónico se ejecuta después de todo lo sincrónico
// lo asincrónico que demore menos, se va a ejecutar antes de lo asincrónico que demore más, a pesar de que pueda estar después en el código

// for (let letra of "hola") {
//     setTimeout(() => {
//         console.log(letra);
//     }, 1000)
// }

// let contador = 1;

// let intervalo = setInterval(() => {
//     console.log(contador);

//     if (contador === 10) {
//         clearInterval(intervalo);
//     }

//     contador++;
// }, 500)

// let titulo = document.querySelector("#titulo");

// titulo.addEventListener("mouseenter", () => {
//     titulo.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

//     setTimeout(() => {
//         titulo.style.color = "black";
//     }, 1000);
// })

//! Promesas

// const eventoFuturo = (res) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve({nombre: "Carpi"}) : reject("Promesa rechazada");
//         }, 2000);
//     })
// }

// eventoFuturo(true)
//     .then((respuesta) => {
//         console.log(respuesta);
//     })
//     .catch((respuesta) => {
//         console.log(respuesta);
//     })
//     .finally(() => {
//         console.log("Promesa terminada.");
//     })