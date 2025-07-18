<?php
header("Content-Type: application/json");

// DB Connection
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'transactly';

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode([]);
    exit;
}

// Sample query — adapt to your actual table
$sql = "SELECT username, email, trust_score, risk_level, status FROM users";
$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
