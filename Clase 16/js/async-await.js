
//! ASYNC-AWAIT EN FUNCIÓN DECLARADA
// async function pedirPosts() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await resp.json();
//     console.log(data);
// }

// pedirPosts();

//! ASYNC-AWAIT EN FUNCIÓN FLECHA

// const pedirPosts = async () => {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await resp.json();
//     console.log(data);
// }

// pedirPosts();

//! MÉTODO TRADICIONAL CON .THEN

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))