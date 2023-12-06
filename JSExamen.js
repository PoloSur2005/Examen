document.addEventListener("DOMContentLoaded", function() {
    // Obtener los parámetros de la URL
    var urlParams = new URLSearchParams(window.location.search);

    // Obtener los valores de los parámetros
    var edad = urlParams.get('edad');
    var sexo = urlParams.get('sexo');
    var educacion = urlParams.get('educacion');
    var ocupacion = urlParams.get('ocupacion');

    // Actualizar el contenido en la página con id "resultadoDatos"
    var resultadoDatos = document.getElementById('resultadoDatos');
    resultadoDatos.innerHTML = `
        <p>Edad: ${edad}</p>
        <p>Sexo: ${sexo}</p>
        <p>Nivel de educación: ${educacion}</p>
        <p>Ocupación: ${ocupacion}</p>
    `;
});
