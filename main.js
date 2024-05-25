document.addEventListener('DOMContentLoaded', () => {
   //funcion del boton para cambiar a pagina analizar texto
const botonAnalizar = document.getElementById('analizar');
botonAnalizar.addEventListener('click', function () {
    analizar();
});
//cambiar de pagina
function analizar() {
    window.location.href = 'analizar.html';
}
//funcion del boton para cambiar a pagina funcion redes sociales
const botonFuncion = document.getElementById('funcion');
botonFuncion.addEventListener('click', function () {
    funcion();
});
//cambiar de pagina
function funcion() {
    window.location.href = 'funcion.html';
}
});



