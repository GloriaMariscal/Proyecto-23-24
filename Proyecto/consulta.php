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
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Insertar datos en la base de datos
$sql = "INSERT INTO consultas (nombre, email, mensaje) VALUES (?, ?, ?)";
$x = $conn->prepare($sql);
$x->bind_param("sss", $nombre, $email, $mensaje); 

if ($x->execute()) {
    echo "<script>alert('Consulta enviada exitosamente.');</script>";
    echo "<meta http-equiv='refresh' content='1;url=pag_secundarias/Consultas.html'>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$x->close();
$conn->close();
?>