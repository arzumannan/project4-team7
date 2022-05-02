<!doctype html>

<html>

<head lang="en">
	<meta charset="UTF-8">
	<title>Adding Album to DB</title>
</head>

<body>
	<div>
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

// Get the data from the "addAlbum" page and assign it to the below variables

$username=$_POST["username"];
$email=$_POST["email"];
$pass=$_POST["pass"];
// write the sql query in php file to Insert the data into the table

$sql = "INSERT INTO users (username, email, pass)
VALUES ('$username', '$email', '$pass')";

if ($conn->query($sql) === TRUE) {
    echo "New sign-up successfully saved";
} else {
    echo "Error: New sign-up failed to be saved";
}

$conn->close();
?>
	<!-- Redirect the user to show the data (For Testing)-->
	<a href="displayTable.php"><input type="button" id="btn1" value="table data (testing)"></a>
    <!-- Redirect user to Login Page-->
    <a href="login.html"><input type="button" id="btn1" value="Login Page"></a>
	</div>
</body>

</html>