document.addEventListener('DOMContentLoaded', function() {
    // Cambiar estilo del botón al pasar el ratón por encima
    const enviar_boton = document.getElementById('enviar');
    
    enviar_boton.style.fontFamily = "'Montserrat', Helvetica, Arial, Lucida, sans-serif";
    enviar_boton.style.backgroundColor = 'blue';
    
    enviar_boton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = 'darkblue';
    });

    enviar_boton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'blue';
    });
});