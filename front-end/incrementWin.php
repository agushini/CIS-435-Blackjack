<?php
require_once('database.php');

$username = $_GET['User'];

echo $username;

//Get the wins from the database by the username
$query1 = 'SELECT wins FROM blackjack
           WHERE username = "' . $username . '"';
$statement1 = $db->prepare($query1);
//$statement1->bindValue(':username', $username);
$statement1->execute();
$product1 = $statement1->fetch();
$statement1->closeCursor();

echo implode(" ", $product1);
//Increment the username's win
//$wins = $product + 1;

//Update the database with the username's new win count
$query2 = 'UPDATE blackjack
          SET wins = :wins
          WHERE username = "' . $username . '"';
$statement2 = $db->prepare($query);
$statement2->bindValue(':wins', $wins);
//$statement2->bindValue(':username', $username);
$statement2->execute();
$statement2->closeCursor();
?>