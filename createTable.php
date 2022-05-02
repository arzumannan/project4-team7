<!doctype html>

<html>

<head lang="en">
	<meta charset="UTF-8">
	<title>Create Table</title>
</head>

<body>
You have successfully logged in
<?php

$servername = "localhost";
$username = "cmanning15";
$password = "cmanning15";
$dbname = "cmanning15";

// The above used four variables servername,username,password and dbname 
// are according to my environment setting.

// Now your task would be to check 
// what your values would be accoring to your environment and change the values of above mentioned variables

// Note : This is the most crucial step for you DB connection. Please double check and change the values.

// Create connection

// create a variable conn and use it to establish the connection to the DB
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 

// sign up data
$sql = "CREATE TABLE users (
	username VARCHAR(50) NOT NULL UNIQUE, 
	email VARCHAR(50) NOT NULL UNIQUE, 
	pass VARCHAR(50) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
	echo "Table signed created successfully";
} else {
//table already exists
// Hnadle this condition
	echo "Error creating table: " . $conn->error;
}

// seller data
$sql = "CREATE TABLE sell (
	username VARCHAR(50) NOT NULL UNIQUE, 
	var1 VARCHAR(50) NOT NULL, 
	var2 VARCHAR(50) NOT NULL,
	var3 VARCHAR(50) NOT NULL,
	var4 VARCHAR(50) NOT NULL,
	var5 VARCHAR(50) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
	echo "Table sell created successfully";
} else {
//table already exists
// Hnadle this condition
	echo "Error creating table: " . $conn->error;
}

// seller data
$sql = "CREATE TABLE administrator (
	username VARCHAR(50) NOT NULL UNIQUE, 
	email VARCHAR(50) NOT NULL UNIQUE,
	var1 VARCHAR(50) NOT NULL, 
	var2 VARCHAR(50) NOT NULL,
	var3 VARCHAR(50) NOT NULL,
	var4 VARCHAR(50) NOT NULL,
	var5 VARCHAR(50) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
	echo "Table sell created successfully";
} else {
//table already exists
// Hnadle this condition
	echo "Error creating table: " . $conn->error;
}

$conn->close();
?>  
</body>

</html>