<?php

//Make sure the localhost port number is the same port number as MySQL on XAMPP
$dsn = 'mysql:host=localhost:3306;dbname=blackjack';

//Create a user for phpMyAdmin with username 'JuicyJ' pa55word 'ice'.
$juicy = 'JuicyJ';
$jay = 'ice';

$link = mysqli_connect("localhost", $juicy, $jay, "blackjack");

//Connect to the database
$db = new PDO($dsn, $juicy, $jay);
try {
    $db = new PDO($dsn, $juicy, $jay);
    echo '<p>You are connected to the database!</p>';
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    echo "<p>An error occured while connecting to the database: $error_message </p>";
}
?>  