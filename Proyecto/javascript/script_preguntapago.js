document.addEventListener('DOMContentLoaded', function () {
    // Obtener los parámetros necesarios
    const urlParams = new URLSearchParams(window.location.search);
    const reservaId = urlParams.get('reserva_id');
    const precio = urlParams.get('precio');
    
    // Mostrar los detalles de la reserva
    document.getElementById('reservaId').textContent = reservaId;
    document.getElementById('precio').textContent = precio;

    // Obtener los botones
    const pagarEnPersonaBtn = document.getElementById('pagarEnPersona');
    const pagarConTarjetaBtn = document.getElementById('pagarConTarjeta');

    // Agregar eventos a los botones de pago
    pagarEnPersonaBtn.addEventListener('click', function () {
        window.location.href = '../pag_secundarias/Reservas.html';
    });

    pagarConTarjetaBtn.addEventListener('click', function () {
        window.location.href = `payment.html?reserva_id=${reservaId}&precio=${precio}`;
    });

    // No es necesario agregar eventos de hover aquí ya que el CSS se encarga de ello
});