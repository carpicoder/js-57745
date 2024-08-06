
//! Guardar un dato en LS
// localStorage.setItem("nombre", "Carpi");

//! Obtener un dato del LS
// let nombreUsuario = localStorage.getItem("nombre");
// console.log(nombreUsuario);

//! Eliminar un dato del LS
// localStorage.removeItem("nombre");


//! EJEMPLO DE PEDIR NOMBRE

// let nombreEnLS = localStorage.getItem("nombre"); // Carpi
// let nombreUsuario;

// if (nombreEnLS !== null) {
//     nombreUsuario = nombreEnLS;
// } else {
//     nombreUsuario = prompt("Ingresá tu nombre");
//     localStorage.setItem("nombre", nombreUsuario);
// }

// let titulo = document.querySelector("#titulo");
// titulo.innerText = "Hola, " + nombreUsuario + "!";



/*
    ! falsy

    0
    ""
    null
    undefined
    -0
    false
    NaN

    0n

    ! truthy

    todo lo demás

*/

//! JSON

// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
// }

//? en 2 pasos
// const usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);

//? en 1 paso
// localStorage.setItem("usuario", JSON.stringify(usuario));

//? en 2 pasos
// const usuarioEnLS = localStorage.getItem("usuario");
// const usuarioObjeto = JSON.parse(usuarioEnLS);

//? en 1 paso
// const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));


// const usuarios = ["Benja", "Lucas", "Walter", "Ale"];
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

// const usuarioEnLS = JSON.parse(localStorage.getItem("usuarios"));
// console.log(usuarioEnLS);