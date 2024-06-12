-- Crear la base de datos llamada "deportes_castellar" si no existe todavía
CREATE DATABASE IF NOT EXISTS deportes_castellar;

-- Seleccionar la base de datos llamada deportes_castellar
USE deportes_castellar;

-- Crear las tablas llamadas reservas y consultas con los distintos registros
CREATE TABLE IF NOT EXISTS reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    hora TIME NOT NULL,
    luz VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    email VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reserva_id INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    numero_tarjeta VARCHAR(16) NOT NULL,
    fecha_expiracion VARCHAR(5) NOT NULL,
    cvv VARCHAR(3) NOT NULL,
    nombre_titular VARCHAR(100) NOT NULL,
    FOREIGN KEY (reserva_id) REFERENCES reservas(id)
);

CREATE TABLE IF NOT EXISTS consultas (
    id INT(5) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(100),
    mensaje VARCHAR(255)
);