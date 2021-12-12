<?php
require_once('database.php');

echo "Calling incrementWin.php";

//FIXME: Not incrementing wins. Honestly, I don't even think this file is being called.
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