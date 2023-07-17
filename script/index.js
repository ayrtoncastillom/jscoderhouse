document.getElementById("credit-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let nombreusuario = document.getElementById("nombreusuario").value;
    let montoasolicitar = document.getElementById("montoasolicitar").value;
    let terminos = document.getElementById("terminos").value;

    while (terminos !== "ACEPTO") {
        switch (terminos) {
            case "NO ACEPTO":
                alert("No te olvides de visitarnos cuando estés de acuerdo con los mismos.");
                break;
            default:
                alert("Por favor escribí ACEPTO o NO ACEPTO");
        }
        terminos = prompt("¿Aceptás nuestros términos de servicio?");
    }

    // Opciones de ingresos
    let opcionesIngresos = [
        "ama de casa",
        "trabajo en negro",
        "estudio",
        "no trabajo",
        "invierto en dogecoin",
        "trabajo en blanco",
        "monotributista"
    ];

    // Función para mostrar opciones y obtener la selección del usuario
    function obtenerSeleccion(opciones) {
        let mensaje = "Elige una opción:\n";
        for (let i = 0; i < opciones.length; i++) {
            mensaje += `${i + 1}. ${opciones[i]}\n`;
        }
        let seleccion = prompt(mensaje);
        if (seleccion !== null) {
            let indice = parseInt(seleccion) - 1;
            if (indice >= 0 && indice < opciones.length) {
                return opciones[indice];
            }
        }
        return null;
    }

    let ingresos = obtenerSeleccion(opcionesIngresos);

    if (nombreusuario === "") {
        alert("No ingresaste tu usuario");
        console.log("No se ingresó correctamente el usuario");
    } else {
        alert("Tu usuario es " + nombreusuario);
    }

    if (montoasolicitar === "") {
        alert("No ingresaste un monto");
    } else {
        alert("El monto que has solicitado, " + nombreusuario + ", es de $" + montoasolicitar);
    }

    if (ingresos === null) {
        alert("Ingreso no válido");
    } else if (
        ingresos === "ama de casa" ||
        ingresos === "trabajo en negro" ||
        ingresos === "estudio" ||
        ingresos === "no trabajo" ||
        ingresos === "invierto en dogecoin"
    ) {
        alert("No puedes acceder a un crédito");
        console.log(nombreusuario + " no puede acceder al crédito por falta de ingresos.");
    } else if (ingresos === "trabajo en blanco") {
        alert("Puedes acceder a $100,000");
    } else if (ingresos === "monotributista") {
        alert("Puedes acceder a $130,000");
    }

    function calcularIntereses(monto, tasa, tiempo) {
        var intereses = monto * (tasa / 100) * tiempo;
        return intereses;
    }

    var montoPrincipal = parseInt(montoasolicitar); // Monto principal ingresado por el usuario
    var tasaInteres = 5; // Tasa de interés en porcentaje
    var tiempoMeses = 12; // Tiempo en meses

    var interesesCalculados = calcularIntereses(montoPrincipal, tasaInteres, tiempoMeses);

    console.log("Los intereses generados son: $" + (parseFloat(montoasolicitar) + parseFloat(interesesCalculados)).toFixed(2));

    // Crear elementos en el DOM para mostrar los resultados

    // Obtener el elemento contenedor
    let resultadoContainer = document.getElementById("resultado-container");

    // Crear un elemento de párrafo para el nombre de usuario
    let nombreUsuarioElement = document.createElement("p");
    nombreUsuarioElement.textContent = "Tu usuario es " + nombreusuario;

    // Crear un elemento de párrafo para el monto solicitado
    let montoSolicitadoElement = document.createElement("p");
    montoSolicitadoElement.textContent = "El monto que has solicitado, " + nombreusuario + ", es de $" + montoasolicitar;

    // Crear un elemento de párrafo para el resultado de los ingresos
    let ingresosElement = document.createElement("p");

    if (ingresos === null) {
        ingresosElement.textContent = "Ingreso no válido";
    } else if (
        ingresos === "ama de casa" ||
        ingresos === "trabajo en negro" ||
        ingresos === "estudio" ||
        ingresos === "no trabajo" ||
        ingresos === "invierto en dogecoin"
    ) {
        ingresosElement.textContent = "No puedes acceder a un crédito";
        console.log(nombreusuario + " no puede acceder al crédito por falta de ingresos.");
    } else if (ingresos === "trabajo en blanco") {
        ingresosElement.textContent = "Puedes acceder a $100,000";
    } else if (ingresos === "monotributista") {
        ingresosElement.textContent = "Puedes acceder a $130,000";
    }

    // Limpiar el contenedor antes de agregar los elementos
    resultadoContainer.innerHTML = "";

    // Agregar los elementos al contenedor
    resultadoContainer.appendChild(nombreUsuarioElement);
    resultadoContainer.appendChild(montoSolicitadoElement);
    resultadoContainer.appendChild(ingresosElement);
});
