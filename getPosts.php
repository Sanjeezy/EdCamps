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

$sql1="SELECT * FROM comments";
 
$result = $con->query($sql1);
    
    if (!$result){
		 die('Error: ' . mysqli_error($con));
	}	

echo "<table id='rcTable'>
<tr>
<th id='rcTh'>email</th>
<th id='rcTh'>location</th>
<th id='rcTh'>comment</th>
</tr>";

while($row = mysqli_fetch_assoc($result))
{
	echo "<tr>";
	echo "<td id='rcTd'>" . $row['email'] . "</td>";
	echo "<td id='rcTd'>" . $row['location'] . "</td>";
	echo "<td id='rcTd'>" . $row['comment'] . "</td>";
	echo "</tr>";
}
echo "</table>";

mysqli_close($con); 

?>