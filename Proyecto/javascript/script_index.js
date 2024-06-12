//Script con las funciones para que el cuadrado cambie de tamaño al pasar y quitar el ratón por encima.
document.addEventListener("DOMContentLoaded", function() {
    const cuadrados = document.querySelectorAll(".cuadrado");

    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        cuadrado.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});