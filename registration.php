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

$sql = "INSERT INTO users (childName,parentName,dob,parentPhone,parentEmail,childGrade,specialInstructions,duration,ccType,ccNumber,securityCode,expDate,campLocation) 

VALUES ('$_POST[childName]','$_POST[parentName]','$_POST[dob]','$_POST[parentPhone]','$_POST[parentEmail]','$_POST[childGrade]',
'$_POST[specialInstructions]','$_POST[duration]','$_POST[ccType]','$_POST[ccNumber]','$_POST[securityCode]','$_POST[expDate]','$_POST[campLocation]')";

$result = $con->query($sql);

if (!$result) {
	die('Error: ' . mysqli_error($con));
}

echo "1 user added";

mysqli_close($con); 

?>