<?php
echo "Calling incrementWin.php";
$username = $_POST["username"];
$wins = $_POST["wins"];

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

$wins++;
$query = "UPDATE blackjack
          SET wins = :wins
          where username = :username";
$statement = $db->prepare($query);
$statement->bindValue(':wins', $wins);
$statement->bindValue(':username', $username);
$statement->execute();
$statement->closeCursor();
?>