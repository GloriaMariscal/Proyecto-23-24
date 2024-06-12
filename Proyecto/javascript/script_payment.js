document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        let errorMessages = [];

        // Validar número de tarjeta
        const tarjeta = document.getElementById('tarjeta').value;
        const tarjetaRegex = /^\d{16}$/;
        if (!tarjetaRegex.test(tarjeta)) {
            errorMessages.push('El número de tarjeta debe tener 16 números.');
            valid = false;
        }

        // Validar fecha de expiración
        const fechaExpiracion = document.getElementById('fecha_expiracion').value;
        const fechaExpiracionRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!fechaExpiracionRegex.test(fechaExpiracion)) {
            errorMessages.push('La fecha de expiración debe tener el formato MM/YY.');
            valid = false;
        }

        // Validar CVV
        const cvv = document.getElementById('cvv').value;
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(cvv)) {
            errorMessages.push('El CVV debe tener 3 números.');
            valid = false;
        }

        // Validar nombre del titular
        const nombreTitular = document.getElementById('nombre_titular').value;
        if (nombreTitular.trim() === '') {
            errorMessages.push('El nombre del titular es obligatorio.');
            valid = false;
        }

        // Mostrar mensajes de error o proceder con el pago
        if (!valid) {
            alert(errorMessages.join('\n'));
        } else {
            // Simulación de procesamiento de pago
            alert('Pago realizado exitosamente.');
            paymentForm.submit();
        }
    });
});
