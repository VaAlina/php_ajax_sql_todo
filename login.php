<?php

require 'init.php';

//The data for login loses somewhere here.

$userLogin = $_POST['login'];
$userPassword = $_POST['password'];
$expectedLogin = "admin";
$expectedPassword = "123";



if($userPassword =! $expectedPassword){
	echo "Password is incorrect.";
}else if($userLogin != $expectedLogin){
    echo "Login is incorrect.";
}else{
	echo "Hello, Admin";
}



?>