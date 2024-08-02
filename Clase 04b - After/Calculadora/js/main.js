function activarCalculadora() {
    let num1;
    do {
        num1 = parseInt(prompt("Ingresá el primer número"));
    } while(isNaN(num1));
    
    let num2;
    do {
        num2 = parseInt(prompt("Ingresá el segundo número"));
    } while(isNaN(num2));
    
    let operacion;
    do {
        operacion = prompt(`
        Seleccione una operación:
        +  Suma
        -  Resta
        *  Multiplicación
        /  División
        `);
    } while(operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/");
    
    function calcular(numero1, numero2, operacionMatematica) {
        switch (operacionMatematica) {
            case "+":
                return numero1 + numero2;
            case "-":
                return numero1 - numero2;
            case "*":
                return numero1 * numero2;
            case "/":
                if (numero2 !== 0) {
                    return numero1 / numero2;
                } else {
                    return "No se puede dividir por 0";
                }
            default:
                return "Operación inválida";
        }
    }
    
    let resultado = calcular(num1, num2, operacion);
    alert("El resultado es: " + num1 + operacion + num2 + "=" + resultado);

    if (confirm("Te gustaría volver a calcular?")) {
        activarCalculadora();
    }
}

activarCalculadora();