<?php


/* ==========================================================================
   Registration page PHP
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


$sql = "INSERT INTO comments (email,comment,location) 

VALUES ('$_POST[email]','$_POST[comment]','$_POST[location]')";

$result = $con->query($sql);

if (!$result) {
	die('Error: ' . mysqli_error($con));
}

echo "comment added!";

mysqli_close($con); 




?>

