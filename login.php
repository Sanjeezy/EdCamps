<?php

/* ==========================================================================
   Login/Schedule page PHP
   ========================================================================== */

 ini_set('display_errors', 'On');
error_reporting(E_ALL);
$db_host = "dbserver.engr.scu.edu";
$db_user = "stamizha";
$db_pass = "00001025846";
$db_name = "sdb_stamizha";

$con = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//$email = $_POST["parentEmail"];


$sql = "SELECT * FROM users WHERE parentEmail = '$_GET[parentEmail]'";
$result = $con->query($sql);

if (!$result) {
	die('Error: ' . mysqli_error($con));
}

if($result->num_rows == 0){

	echo"invalid";
	return;
}

echo "success";

mysqli_close($con); 
?>



		


