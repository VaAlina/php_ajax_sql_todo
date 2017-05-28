<?php

require 'init.php';

$taskId = $_POST['taskId'];

//Get all tasks from the table. Begine.
$taskList = "UPDATE `beejee`.`tasks` SET `ok` = '1' WHERE `tasks`.`id` = '$taskId'";
$result = mysqli_query($conn, $taskList);

require 'print.php';

$conn->close();

?> 