const botonAlerta = document.querySelector("#alerta");
const botonConsola = document.querySelector("#consola");
const botonModoColor = document.querySelector("#color-mode");

//! 1. con el método addEventListener

// botonAlerta.addEventListener("click", mostrarAlerta);

// function mostrarAlerta() {
//     alert("Hiciste click!");
// }

// botonAlerta.addEventListener("click", () => {
//     alert("Hiciste click!");
// });

//! 2. onevent => onmouseup

// botonAlerta.onclick = () => {
//     alert("Hiciste click!");
// }


//! mousedown

// botonAlerta.addEventListener("mousedown", () => {
//     alert("Apretaste el click")
// })

//! mouseup

// botonAlerta.addEventListener("mouseup", () => {
//     alert("Apretaste el click")
// })

//! mouseover

// let counter = 0;

// botonAlerta.addEventListener("mouseover", () => {
//     counter++;
//     console.log(counter);
// })

//! mouseout

// botonAlerta.addEventListener("mouseout", () => {
//     console.log("Saliste del elemento!")
// })

//! mousemove

// document.body.addEventListener("mousemove", (e) => {
//     console.log(e.clientX);
// })


//! EJEMPLO DE MODO OSCURO
/*
! classList.add => agrega una clase al elemento
! classList.remove => elimina una clase del elemento
! classList.contains => true o false, dependiendo de si la clase está o no en el elemenot
! classList.toggle => si el elemento tiene la clase, la elimina; si no la tiene, la agrega
 */

// botonModoColor.addEventListener("click", () => {
//     // if (document.body.classList.contains("dark-mode")) {
//     //     document.body.classList.remove("dark-mode");
//     // } else {
//     //     document.body.classList.add("dark-mode");
//     // }
//     document.body.classList.toggle("dark-mode");
// })

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");
const alertaSubmit = document.querySelector("#alerta-submit");

//! keydown
// alertaInput.addEventListener("keydown", () => {
//     console.log("Apretaste una tecla")
// })


//! keyup
// alertaInput.addEventListener("keyup", () => {
//     console.log("Soltaste una tecla")
// })

//! change
// alertaInput.addEventListener("change", (e) => {
//     console.log(e.target.value)
// })

//! input
// alertaInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

//! submit
// alertaForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert(alertaInput.value);
// })

//! EJEMPLO mostra abajo

// const abajoInput = document.querySelector("#abajo-input");
// const abajoParrafo = document.querySelector("#abajo");

// abajoInput.addEventListener("input", () => {
//     abajoParrafo.innerText = abajoInput.value;
// })

//! EJEMPLO agregar ítem a la lista

const lista = document.querySelector("#agregar");
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregarSubmit = document.querySelector("#agregar-submit");

agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const liNuevo = document.createElement("li");
    liNuevo.classList.add("item");
    
    const spanTexto = document.createElement("span");
    spanTexto.id = "item-texto";
    spanTexto.innerText = agregarInput.value;
    liNuevo.append(spanTexto);

    const spanEliminar = document.createElement("span");
    spanEliminar.id = "item-eliminar";
    spanEliminar.innerText = "⛔";
    spanEliminar.addEventListener("click", () => {
        liNuevo.remove();
    })
    liNuevo.append(spanEliminar);

    lista.append(liNuevo);

    agregarForm.reset();
    agregarInput.focus();
})

/* 
<li class="item">
    <span id="item-texto">Carpi</span>
    <span id="item-eliminar">⛔</span>
</li>
*/