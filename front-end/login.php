 <?php
$username = $_POST["username"];
$password = $_POST["password"];
$wins = 0;


$dsn = 'mysql:host=localhost:3306;dbname=blackjack';
$juicy = 'JuicyJ';
$jay = 'ice';

$db = new PDO($dsn, $juicy, $jay);
try {
    $db = new PDO($dsn, $juicy, $jay);
    echo '<p>You are connected to the database!</p>';
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    echo "<p>An error occured while connecting to the database: $error_message </p>";
}

$query1 = 'SELECT * FROM blackjack
           WHERE username = :username';
$statement1 = $db->prepare($query1);
$statement1->bindValue(':username', $username);
$statement1->execute();
$product = $statement1->fetch();
$statement1->closeCursor();
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
header("Location: game.php");
} else {
    echo "Logged in as $username!";
    header("Location: game.php");
}
?>