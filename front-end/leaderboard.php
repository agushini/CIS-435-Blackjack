<?php
require_once('database.php');

$query = 'SELECT username, wins
          FROM blackjack
          ORDER BY wins DESC';
$statement = $db->prepare($query);
$statement->execute();
$leaderboard = $statement->fetchAll();
$statement->closeCursor();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<link rel="stylesheet" href="leaderboardStyle.css">

<head>
    <title>Leaderboard</title>
    <meta charset="utf-8">
</head> 

<div id=body>
    <body>
        <header><h1>Top ranking players</h1></header>
        <div id=h2contents>
        <h2>
        <?php
            foreach($leaderboard as $emp) {
                echo $emp['username'] . " " . $emp['wins'] . '<br>';
            }
        ?>
        </h2>
    </div>
    <a href="index.php"></href>
    </body>
</div>
</html>