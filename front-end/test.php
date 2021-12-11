 <?php
//define variables and set to empty values
/*$username = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = testInput($_POST["username"]);
    $password = testInput($_POST["password"]);
}

if (empty($_POST["username"])) {
    $usernameErr = "Username is required";
} else {
    $username = testInput($_POST["username"]);
}

if (empty($_POST["password"])) {
    $passwordErr = "Password is required";
} else {
    $password = testInput($_POST["password"]);
}

function testInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}*/

echo("Welcome to the jungle");

$servername = "localhost:1337";
$username = "cis435";
$password = "password";
$database = "blackjack";

//Create connection
$conn = new mysqli($servername, $username, $password, $database);
echo("Is there anybody out there?");
echo($servername . $username . $password . $database);

//Check connection
/*if ($conn->connect_error) {
    die("Connection failed" . $conn->connect_error);
}*/

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

/*$sql = "CREATE TABLE BlackJack (
    username VARCHAR(30) NOT NULL PRIMARY KEY,
    psswrd VARCHAR(30) NOT NULL,
    wins INT(6)
)";

if ($conn->query($sql) === TRUE) {
    echo("Table BlackJack created successfully");
} else {
    echo("Error creating table: " . $conn->error);
}

/*echo "Connected successfully";

//Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}*/

//$conn->close();
?>