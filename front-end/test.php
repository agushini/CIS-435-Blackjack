 <?php
//define variables and set to empty values
$user_name = $password = "";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = testInput($_POST["username"]);
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
}

$servername = "localhost";
$username = "username";
$password = "password";

//Create connection
$conn = new mysqli($servername, $username, $password);

//Check connection
if ($conn->connect_error) {
    die("Connection failed" . $conn->connect_error);
}
echo "Connected successfully";
?>