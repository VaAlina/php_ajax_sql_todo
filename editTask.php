<?php

require 'init.php';

$taskId = $_POST['taskId'];

//Get all tasks from the table. Begine.

$taskList = "SELECT FROM `beejee`.`tasks` WHERE `tasks`.`id` = '$taskId'";
$result = mysqli_query($conn, $taskList);

require 'print.php';

$conn->close();

?> 