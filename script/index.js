
// Prompt sirve para probar una variable, solo muestra strings.
// ParseInt convierte el string en nun numero
// ParseFloat para operar con decimales.
alert("Este sitio web está en desarrollo")
let nombreusuario = prompt("Ingresá tu usuario")
let montoasolicitar = prompt("¿Cuanto quiere solicitar?")
let ingresos = prompt("¿A que se dedica actualmente?")
if (nombreusuario == "") {
    alert("No ingresaste tu usuario")

    console.log("no ingresó correctamente el usuario")
}
else {
    alert("tu usuario es " + nombreusuario)
}

if (montoasolicitar == "") {
    alert("No ingresaste un monto")
}
else {
    alert("El monto que ha solicitado " + nombreusuario + " es de $" + montoasolicitar)
}

if (ingresos === "ama de casa" || ingresos === "trabajo en negro" || ingresos === "estudio" || ingresos === "no trabajo" || ingresos === "invierto en dogecoin") {
    alert("Usted no puede acceder a un crédito");
    console.log(nombreusuario + " no puede acceder al crédito por falta de ingresos.");
} else if (ingresos === "trabajo en blanco" || ingresos === "1" || ingresos === "trabajo") {
    alert("Usted puede acceder a 100.000");
} else if (ingresos === "monotributista" || ingresos === "2" || ingresos === "ajo") {
    alert("Usted puede acceder a 130.000");
} else {
    alert("Ingreso no válido");
}
function calcularIntereses(monto, tasa, tiempo) {
    var intereses = monto * (tasa / 100) * tiempo;
    return intereses;
}

// Ejemplo de uso
var montoPrincipal = 1000; // Monto principal
var tasaInteres = 5; // Tasa de interés en porcentaje
var tiempoMeses = 12; // Tiempo en meses

var interesesCalculados = calcularIntereses(montoPrincipal, tasaInteres, tiempoMeses);

console.log("Los intereses generados son: " + interesesCalculados);





