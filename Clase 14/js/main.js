//! sweetAlert

// let botonAlert = document.querySelector("#alert");

// botonAlert.addEventListener("click", () => {
    
//     Swal.fire({
//         title: "Hola, mundo",
//         text: "Estamos probando SweetAlert",
//         icon: "success",
//         footer: "<p>Esto es un footer</p>",
//         // imageUrl: "../img/perrito.jpg"
//         showCloseButton: true,
//         showCancelButton: true,
//         showDenyButton: true,
//         confirmButtonText: "Sí, dale!",
//         cancelButtonText: "No quiero",
//         position: "center",
//     }).then((result) => {
//         if (result.isConfirmed) {
//             console.log("Confirmaste!");
//             Swal.fire("Bien, confirmaste!");
//         } else if (result.isDenied) {
//             console.log("Rechazaste!");
//         } else if (result.isDismissed) {
//             console.log("Descartaste!");
//         }
//     })


// })

//! toastify

// let botonToast = document.querySelector("#toast");

// botonToast.addEventListener("click", () => {

//     Toastify({
//         text: "Hola, mundo!",
//         duration: 5000,
//         // destination: "https://carpicoder.com",
//         // newWindow: true,
//         close: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//             background: "linear-gradient(to right, red, black)",
//             color: "green"
//         },
//         // onClick: function() {
//         //     alert("Hola genio!")
//         // }
//         className: "toast-de-carpi",
//         offset: {
//             x: "2rem",
//             y: 15
//         },
//         avatar: "../img/perrito.jpg",
//         callback: function() {
//             console.log("Cerró")
//         },
//     }).showToast();

// })

const DateTime = luxon.DateTime;

// const dt = DateTime.local(2022, 12, 18);
// const dt = DateTime.fromObject({
//     year: 2022,
//     month: 12,
//     day: 18,
//     hour: 12
// }, {
//     zone: "America/Buenos_Aires"
// })
const dt = DateTime.fromISO("2022-12-18T12:30:00");
const now = DateTime.now();

// console.log(now.toString()); // Mostramos la fecha en formato string
// console.log(now.year) // Mostramos el año
// console.log(now.month) // Mostramos el mes
// console.log(now.day) // Mostramos el día
// console.log(now.second) // Mostramos los segundos
// console.log(now.weekday) // Mostramos el día de la semana
// console.log(now.zoneName) // Mostramos el nombre de la zona
// console.log(now.daysInMonth) // Mostramos la cantidad de días que hay en este mes

// console.log(now.day + "/" + now.month + "/" + now.year);

// console.log(now.toLocaleString(DateTime.DATE_SHORT));
// console.log(now.toLocaleString(DateTime.DATE_MED));
// console.log(now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.DATE_HUGE));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));


// console.log( now.setLocale("en-US").toLocaleString() )
// console.log( now.setLocale("en-UK").toLocaleString() )
// console.log( now.setLocale("es-ES").toLocaleString() )



// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const enUnRato = now.plus({ hours: 3, days: 5});
// console.log(enUnRato.toLocaleString(DateTime.DATETIME_SHORT));

// const haceUnRato = now.minus({ minutes: 20, days: 5 })
// console.log(haceUnRato.toLocaleString(DateTime.DATETIME_SHORT));


// const duracion = luxon.Duration.fromObject({ days: 1, hours: 2 });

// const enUnRato = now.plus(duracion);
// console.log(enUnRato.toLocaleString(DateTime.DATETIME_SHORT));


// const intervalo = luxon.Interval.fromDateTimes(dt, now);

// console.log( intervalo.length("days") );
// console.log( intervalo.length("hours") );
// console.log( intervalo.length("minutes") );