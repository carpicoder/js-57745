function jugarAdivinaNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    // const numeroAleatorio = 50;
    
    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        const intento = parseInt(prompt("Intentá adivinar un número entre 1 y 100:"));
        intentos++;

        if (intento === numeroAleatorio) {
            alert("¡Felicitaciones! El número era " + numeroAleatorio + ". Lo adivinaste en " + intentos + " intentos.");
            adivinado = true;
            jugarAdivinaNumero();
        } else if (intento < numeroAleatorio) {
            if (numeroAleatorio - intento <= 5) {
                alert("Estás cerquita, andá un poco más para arriba");
            } else {
                alert("El número es más alto! Intentá de nuevo.")
            }
        } else {
            if (intento - numeroAleatorio <= 5) {
                alert("Estás cerquita, andá un poco más para abajo");
            } else {
                alert("El número es más bajo! Intentá de nuevo.")
            }
        }
    }
}

jugarAdivinaNumero();