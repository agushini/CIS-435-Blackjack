 <?php
 require_once('database.php');

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