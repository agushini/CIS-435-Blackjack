 <?php
 require_once('database.php');
 $username = $_POST["username"];
 $pa55word = $_POST["pa55word"];

 setcookie("user", $username, time()+3600);

//Check if the username already exists within the database
$query1 = 'SELECT * FROM blackjack
           WHERE username = :username';
$statement1 = $db->prepare($query1);
$statement1->bindValue(':username', $username);
$statement1->execute();
$product1 = $statement1->fetch();
$statement1->closeCursor();
//If the username does not exist in the database, insert the username and pa55word with 0 wins into the database.
//FIXME: Need to check if the pa55word is valid.
//echo implode(" ", $product1);
if (!$product1) {
    $wins = 0;
    $query2 = "INSERT INTO blackjack
          (username, pa55word, wins)
          VALUES
          (:username, :pa55word, :wins)";

$statement2 = $db->prepare($query2);
$statement2->bindValue(':username', $username);
$statement2->bindValue(':pa55word', $pa55word);
$statement2->bindValue(':wins', $wins);
$statement2->execute();
$statement2->closeCursor();
echo "New account $username created!";
header("Location: game.php");
//Else, we know that the username already exists.
} else {
    //Check to see if the username and pa55word are correct.
    $query3 = 'SELECT * FROM blackjack
               WHERE username = :username
               AND pa55word = :pa55word';
    $statement3 = $db->prepare($query3);
    $statement3->bindValue(':username', $username);
    $statement3->bindValue(':pa55word', $pa55word);
    $statement3->execute();
    $product3 = $statement3->fetch();
    $statement3->closeCursor();
    //echo implode(" ", $product3);
    if (!$product3) {
        echo "Login failed. Please enter correct username and password.";
    } else {
        echo "Logged in as $username!";
        header("Location: game.php");
    }
    //echo "Is this happening?";
    //echo $product3;
    //If the username and pa55word are correct

    
}
?>
