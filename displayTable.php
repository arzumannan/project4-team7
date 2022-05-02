<!doctype html>

<html>

<head lang="en">
	<meta charset="UTF-8">
<title>Display Table</title>
	<style>
	table {
   	border: 1px solid black;
	border-collapse: collapse;
}

th, td {
	border: 1px solid black;
    text-align: center;
    padding: 8px;
}
tr:nth-child(even){background-color: #a0a0a0}
tr:nth-child(odd){background-color: #ffffff}
tr:nth-child(1){font-weight: bold;}
	</style>
</head>

<body>

<?php
$servername = "localhost";
$username = "cmanning15";
$password = "cmanning15";
$dbname = "cmanning15";

// Step -1 : Create DB connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Step-2 : check if the DB connection is established or not
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
  }

// psw has the password unencrypted
$sql = "SELECT username, email, pass FROM users";
$result = $conn->query($sql);


echo "<h3>Signed Up</h3>";
if ($result->num_rows > 0) {
     // output data of each row
	echo "<table><tr><th>Username</th><th>Email</th><th>Password</th></tr>";

	//  Run a loop and display the records on screen dynamically
	// lets say the above query returned 20 rows
	// Now display the table on screen with 20 records
	foreach($result as $row => $result){
		echo "<tr>";
		echo "<td>" . $result['username'] . "</td>";
		echo "<td>" . $result['email'] . "</td>";
		echo "<td>" . $result['pass'] . "</td>";
		echo "</tr>";
	}
	echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>  
<br>
	<div>
		<!-- Redirect back to the sign-up page -->
		<a href="userreg.html"><input type="button" id="btn1" value="Return to Registration Page"></a>
		<!-- Redirect the below links to login page again as the user clicked logout -->
		<a href="login.html"><input type="button" id="btn1" onclick="addA.php" value="Go To Login Page"></a>
	</div>
</body>

</html>