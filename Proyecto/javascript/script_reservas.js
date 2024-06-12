document.addEventListener('DOMContentLoaded', function() {
    const reservaForm = document.getElementById('reservaForm');
    const error_mensajeDiv = document.getElementById('error_mensaje');
    const tipo = document.getElementById('tipo');
    const luz = document.getElementById('luz');
    const precioInput = document.getElementById('precio');

    reservaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        let error_mensaje = [];

        // Validar fecha
        const fecha = document.getElementById('fecha');
        const fechaValue = new Date(fecha.value);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Setear la hora a 0:00:00.000
        const manana = new Date(hoy);
        manana.setDate(hoy.getDate() + 1); // Incrementar un día
        const diaSemana = fechaValue.getUTCDay();

        if (fechaValue < manana) {
            error_mensaje.push('La reserva debe ser al menos con un día de antelación.');
            valid = false;
        } else if (diaSemana === 0) {
            error_mensaje.push('No se pueden hacer reservas los domingos.');
            valid = false;
        }

        // Validar teléfono
        const telefono = document.getElementById('telefono');
        const telefonoValue = telefono.value;
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefonoValue)) {
            error_mensaje.push('El teléfono debe tener 9 números.');
            valid = false;
        }

        // Validar email
        const email = document.getElementById('email');
        const emailValue = email.value;
        if (!emailValue.endsWith('@gmail.com')) {
            error_mensaje.push('El correo electrónico debe ser @gmail.com.');
            valid = false;
        }

        // Asignar precio
        const tipoValue = tipo.value;
        const luzValue = luz.value;
        let precio = 0;

        if (tipoValue === "padel_standard" && luzValue === "luz_natural") {
            precio = 6;
        } else if (tipoValue === "padel_standard" && luzValue === "luz_artificial") {
            precio = 7;
        } else if (tipoValue === "padel_cristal" && luzValue === "luz_natural") {
            precio = 7;
        } else if (tipoValue === "padel_cristal" && luzValue === "luz_artificial") {
            precio = 8;
        } else if (tipoValue === "tenis" && luzValue === "luz_natural") {
            precio = 6;
        } else if (tipoValue === "tenis" && luzValue === "luz_artificial") {
            precio = 7;
        } else if (tipoValue === "futbol" && luzValue === "luz_natural") {
            precio = 25;
        } else if (tipoValue === "futbol" && luzValue === "luz_artificial") {
            precio = 30;
        }

        precioInput.value = precio;

        // Mostrar mensajes de error
        if (!valid) {
            error_mensajeDiv.innerHTML = error_mensaje.join('<br>');
        } else {
            error_mensajeDiv.innerHTML = '';
            console.log("Precio antes de enviar el formulario:", precioInput.value); // Verificación adicional
            reservaForm.submit();
        }
    });

    // Cambiar estilo del botón al pasar el ratón por encima
    const enviarButton = document.getElementById('enviar');
    enviarButton.style.fontFamily = "'Montserrat', Helvetica, Arial, Lucida, sans-serif";
    enviarButton.style.backgroundColor = 'blue';
    enviarButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = 'darkblue';
    });

    enviarButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'blue';
    });
});