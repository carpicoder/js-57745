
let productoContainer = document.querySelector("#producto");

const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');

fetch("../data/productos.json")
    .then((resp) => resp.json())
    .then((data) => {
        const productoAMostrar = data.find((prod) => prod.id === productoId);
        if (productoAMostrar) {
            const div = document.createElement("div");
            div.innerHTML = `
                <h2>${productoAMostrar.nombre}</h2>
                <p>$${productoAMostrar.precio}</p>
            `;
            productoContainer.append(div);
        } else {
            const h2 = document.createElement("h2");
            h2.innerText = "Producto no encontrado";
            productoContainer.append(h2);
        }
    })