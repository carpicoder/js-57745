//! OBJETOS

// objecto literal
// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
//     pais: "Argentina",
//     casado: false,
//     calificaciones: {
//         javascript: 10,
//         react: 9,
//         backend: 4
//     }
// }

// console.log(usuario.calificaciones.javascript);
// console.log(usuario["calificaciones"]["javascript"]);
// console.log(usuario["calificaciones"].javascript);
// console.log(usuario.calificaciones["javascript"]);

// console.log(usuario.edad);


// console.log(usuario["edad"]);
// let propIngresada = prompt("Ingresá qué propiedad querés ver");
// console.log(usuario[propIngresada]);

// usuario.trabajo = "Coderhouse";

// console.log(usuario);

// usuario.nombre = "Lucas";

// console.log(usuario);

//! CONSTRUCTOR

// {
//     titulo,
//     precio,
//     descripcion,
//     color
// }

// function Producto(titulo, precio, descripcion, color) {
//     this.titulo = titulo;
//     this.precio = precio;
//     this.descripcion = descripcion;
//     this.color = color;
//     this.hablar = () => { console.log("Hola, mi título es " + this.titulo) }
//     this.calcularIva = IVA => console.log(this.precio * IVA)
// }

// const producto1 = new Producto("Silla", 1000, "Una silla muy linda", "Negro");
// producto1.calcularIva(1.21);
// producto1.hablar();

// console.log( "titulo" in producto1 )

//! for...in


// let producto1 = {
//     nombre: "Silla",
//     precio: 3000,
//     color: "Negro"
// }

// for (let propiedad in producto1) {
//     console.log(propiedad + ": " + producto1[propiedad]);
// }


//! CLASES CONSTRUCTORAS

// class Producto {
//     constructor(titulo, precio, color) {
//         this.titulo = titulo;
//         this.precio = precio;
//         this.color = color;
//     }
//     hablar() {
//         console.log(this.titulo);
//     }
//     calcularIva(IVA) {
//         console.log(this.precio * IVA);
//     }
// }

// const producto1 = new Producto("Silla", 5000, "Negro");

// console.log(producto1);
// producto1.hablar();
// producto1.calcularIva(1.21);
// producto1.calcularIva(1.03);