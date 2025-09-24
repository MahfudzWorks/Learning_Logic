<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "db_learning";

$conn = mysqli_connect($host, $user, $password, $db);

if ($conn->connect_error) {
   die("Koneksi Gagal : " . $conn->connect_error);
}