<?php

require 'init.php';


$name = $_POST['name'];
$task = $_POST['task'];
$email = $_POST['email'];
$img = $_POST['img'];



$userinput = "INSERT INTO `tasks` (`id`, `firstname`, `email`, `task`, `creation_date`, `img`) VALUES ('', '$name', '$email', '$task', CURRENT_TIMESTAMP, '$img')";
$query = mysqli_query($conn, $userinput);
echo "The text was added!!!";


$conn->close();


?> 
