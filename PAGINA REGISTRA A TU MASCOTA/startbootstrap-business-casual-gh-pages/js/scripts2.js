const form = document.getElementById('registro-form');
const nombreInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellidos');
const anioNacimientoInput = document.getElementById('anio-nacimiento');
const correoGeneradoElement = document.getElementById('correo-generado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const anioNacimiento = anioNacimientoInput.value; // Obtener la fecha de nacimiento completa
    const correoGenerado = generateEmail(nombre, apellidos, anioNacimiento);
    correoGeneradoElement.textContent = `Correo generado: ${correoGenerado}@gmail.com`;
});

function generateEmail(nombre, apellidos, anioNacimiento) {
    const nombreAbreviado = nombre.charAt(0); // Tomar la primera letra del nombre
    const apellidoAbreviado = apellidos.charAt(0); // Tomar la primera letra del primer apellido
    const apellidosArray = apellidos.split(' ');
    const segundoApellido = apellidosArray.length > 1 ? apellidosArray[1] : ''; // Obtener el segundo apellido si existe
    const letraSegundoApellido = segundoApellido.charAt(0); // Tomar la primera letra del segundo apellido
    const primerApellido = apellidosArray[0]; // Obtener el primer apellido
    const ultimasTresLetras = primerApellido.slice(-3); // Tomar las últimas tres letras del primer apellido

    // Asumimos que el formato de fecha de nacimiento es YYYY-MM-DD
    const anio = anioNacimiento.slice(0, 4); // Obtener los cuatro dígitos del año
    const mes = anioNacimiento.slice(5, 7); // Obtener los dos dígitos del mes
    const dia = anioNacimiento.slice(8, 10); // Obtener los dos dígitos del día
    const anioAbreviado = anio.slice(-2); // Tomar los dos últimos dígitos del año de nacimiento

    return `${nombreAbreviado}${apellidoAbreviado}${letraSegundoApellido}${ultimasTresLetras}${anioAbreviado}${mes}${dia}`.toLowerCase();
}
