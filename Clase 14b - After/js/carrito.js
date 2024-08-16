
let contenedorCarrito = document.querySelector("#pagina-carrito");

let carritoLS = JSON.parse(localStorage.getItem("carrito"));

carritoLS.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("pagina-carrito-producto");
    div.innerHTML = `
            <img src="${producto.img}" alt="">
            <h2>${producto.titulo}</h2>
            <p>$${producto.precio.toLocaleString()}</p>
            <p>${producto.cantidad}</p>
            <p>$${producto.cantidad * producto.precio}</p>
    `;

    contenedorCarrito.append(div);
});