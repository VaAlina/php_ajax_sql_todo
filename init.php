<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "beejee";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db) or die ( "Failed to connect to MySQL: " . mysqli_connect_errno());
//echo "Connected successfully!".'<br/>';