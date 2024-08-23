// fetch(url, config)

//! GET -> recibe datos de servidor
//? no hace falta usar el segundo parámetro del fetch

// let postsContainer = document.querySelector("#posts");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((resp) => resp.json())
//     .then((data) => {
//         data.forEach((post) => {
            
//             let div = document.createElement("div");
//             div.innerHTML = `
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//                 <hr>
//             `;
//             postsContainer.appendChild(div);

//         });
//     })

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))

//! POST -> envía datos al servidor
//? hay que usar el segundo parámetro del fetch con la info y config

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         userId: 99,
//         title: "Finaliza el curso de JS",
//         body: "Estamos muy compungidos."
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));


//! EJEMPLO CON JSON PROPIO

fetch("../data/productos.json")
    .then((resp) => resp.json())
    .then((data) => {
        mostrarProductos(data);
    });

let postsContainer = document.querySelector("#posts");

function mostrarProductos(productos) {
    productos.forEach(producto => {
        let div = document.createElement("div");
        div.id = producto.id;
        div.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <a href="./producto.html?id=${producto.id}">Ver más</a>
            <hr>
        `;
        postsContainer.appendChild(div);
    });
}

// URL/producto.html?id=silla