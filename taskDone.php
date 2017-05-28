<?php

require 'init.php';


$doneTask = $_POST['doneTask'];



$userinput = "UPDATE `beejee`.`tasks` SET `ok` = '1' WHERE `tasks`.`id` = '$doneTask' ";
$query = mysqli_query($conn, $userinput);
echo "The text was changed!!!";


$conn->close();


?>
