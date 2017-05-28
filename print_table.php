<?php

require 'init.php';

//Get all tasks from the table. Begine.
$taskList = "SELECT * FROM `tasks`";
$result = mysqli_query($conn, $taskList);

require 'print.php';

$conn->close();

?> 