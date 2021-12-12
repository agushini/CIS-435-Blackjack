<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>BlackJack!</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="indexStyle.css">
        <script src="index.js"></script>
    </head>
    <body>
        <h1 id="welcome">Welcome to BlackJack!</h1>
        <div id="instructions">
        <h2>How to Play: </h2>
            <ul>
                <li>The goal of the game is to get closest to 21 </li>
                <li>You can "hit" (take another card) or "stay" (not take another card) while you are under 21</li>
                <li>If you go over 21 you "bust" or automatically lose</li>
                <li>This means that while you can hit, it does not mean that you should </li>
                <li>The dealer must hit until their total is 17 or higher</li>
                <li>If you get the same number as the dealer you it's a tie.</li>
            </ul>
        </div>

        <?php
        $username = $pa55word = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = testInput($_POST["username"]);
            $pa55word = testInput($_POST["pa55word"]);
        }
        
        if (empty($_POST["username"])) {
            $usernameErr = "Username is required";
        } else {
            $username = testInput($_POST["username"]);
        }
        
        if (empty($_POST["pa55word"])) {
            $pa55wordErr = "Password is required";
        } else {
            $pa55word = testInput($_POST["pa55word"]);
        }
        
        function testInput($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        ?>
        <form action="login.php" method="post" id="form">
        Username:
        <input type="text" name="username">
        <span class="error">* <?php echo $usernameErr;?></span>
        <br>
        Password: <input type="text" name="pa55word">
        <span class="error">* <?php echo $pa55wordErr;?></span>
        <br>
        <input type="submit" value="Login">
        <br><br>
        </form>
        <form method="post" action="leaderboard.php">
            <input type="submit" value="View leaderboards">
        </form>
        <img src=cards/back_cards-07.png width="100%" height="auto">
     </div>
     
    </body>
</html>