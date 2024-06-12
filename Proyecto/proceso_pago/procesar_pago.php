<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deportes_castellar";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$reserva_id = $_POST['reserva_id'];
$precio = $_POST['precio'];
$numero_tarjeta = $_POST['tarjeta'];
$fecha_expiracion = $_POST['fecha_expiracion'];
$cvv = $_POST['cvv'];
$nombre_titular = $_POST['nombre_titular'];

// Insertar datos en la base de datos
$sql = "INSERT INTO pagos (reserva_id, precio, numero_tarjeta, fecha_expiracion, cvv, nombre_titular) VALUES (?, ?, ?, ?, ?, ?)";
$estado = $conn->prepare($sql);
$estado->bind_param("idssss", $reserva_id, $precio, $numero_tarjeta, $fecha_expiracion, $cvv, $nombre_titular);

if ($estado->execute()) {
    //echo "<script>alert('Pago realizado exitosamente.');</script>";
    echo "<meta http-equiv='refresh' content='1;url=../pag_secundarias/Reservas.html'>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$estado->close();
$conn->close();
?>