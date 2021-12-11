 <?php
 //In order for this code to work, you need to create a database & table named 'blackjack' in phpMyAdmin with fields: username, password, and wins (CASE SENSITIVE)
$username = $_POST["username"];
$password = $_POST["password"];
$wins = 0;

//Make sure the localhost port number is the same port number as MySQL on XAMPP
$dsn = 'mysql:host=localhost:3306;dbname=blackjack';

//Create a user for phpMyAdmin with username 'JuicyJ' password 'ice'.
//User accounts -> Add user account -> User name: "JuicyJ" | Host name: use drop down menu to select "Local" | password: "ice" | check all for global privileges
$juicy = 'JuicyJ';
$jay = 'ice';

//Connect to the database
$db = new PDO($dsn, $juicy, $jay);
try {
    $db = new PDO($dsn, $juicy, $jay);
    echo '<p>You are connected to the database!</p>';
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    echo "<p>An error occured while connecting to the database: $error_message </p>";
}

//Check if the username already exists within the database
$query1 = 'SELECT * FROM blackjack
           WHERE username = :username';
$statement1 = $db->prepare($query1);
$statement1->bindValue(':username', $username);
$statement1->execute();
$product = $statement1->fetch();
$statement1->closeCursor();
//If the username does not exist in the database, insert the username and password with 0 wins into the database.
//FIXME: Need to check if the password is valid.
if (!$product) {
    $query2 = "INSERT INTO blackjack
          (username, password, wins)
          VALUES
          (:username, :password, :wins)";

$statement2 = $db->prepare($query2);
$statement2->bindValue(':username', $username);
$statement2->bindValue(':password', $password);
$statement2->bindValue(':wins', $wins);
$statement2->execute();
$statement2->closeCursor();
echo "New account $username created!";
header("Location: game.html");
//Else, just tell the user that they are logged in.
} else {
    echo "Logged in as $username!";
    header("Location: game.html");
}
?>