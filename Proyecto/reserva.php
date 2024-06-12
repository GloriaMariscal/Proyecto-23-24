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
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$tipo = $_POST['tipo'];
$luz = $_POST['luz'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$precio = $_POST['precio'];

// Validar reserva duplicada
$sql_check = "SELECT COUNT(*) as count FROM reservas WHERE fecha = ? AND hora = ? AND tipo = ?";
$estado_check = $conn->prepare($sql_check);
$estado_check->bind_param("sss", $fecha, $hora, $tipo);
$estado_check->execute();
$resultado_check = $estado_check->get_result();
$check = $resultado_check->fetch_assoc();

if ($check['count'] > 0) {
    echo "Error: Ya existe una reserva para este tipo de instalación en la misma hora.";
} else {
    // Insertar datos en la base de datos incluyendo el precio
    $sql = "INSERT INTO reservas (fecha, hora, nombre, apellidos, telefono, email, tipo, luz, precio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $estado = $conn->prepare($sql);
    $estado->bind_param("ssssssssd", $fecha, $hora, $nombre, $apellidos, $telefono, $email, $tipo, $luz, $precio);

    if ($estado->execute()) {
        $reserva_id = $estado->insert_id; // Obtener el ID de la reserva recién insertada
        echo "<script>alert('Reserva realizada exitosamente.');</script>";
        echo "<meta http-equiv='refresh' content='1;url=proceso_pago/pregunta_pago.html?reserva_id=$reserva_id&precio=$precio'>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $estado->close();
}

$estado_check->close();
$conn->close();
?>
