<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>BlackJack!</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles1.css">
        <script src="call-server.js"></script>
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
        $username = $password = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = testInput($_POST["username"]);
            $password = testInput($_POST["password"]);
        }
        
        if (empty($_POST["username"])) {
            $usernameErr = "Username is required";
        } else {
            $username = testInput($_POST["username"]);
        }
        
        if (empty($_POST["password"])) {
            $passwordErr = "Password is required";
        } else {
            $password = testInput($_POST["password"]);
        }
        
        function testInput($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        ?>

        <form action="test.php" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

        Username:
        <input type="text" name="username">
        <span class="error">* <?php echo $usernameErr;?></span>
        <br>

        Password: <input type="text" name="password">
        <span class="error">* <?php echo $passwordErr;?></span>
        <br>
        <input type="submit" value="Login">
        </form>
        
        <br>
        <input type="button" id="btn_start" value="Start Game">
        <br>
        <img src=cards/back_cards-07.png width="100%" height="auto">
     </div>
     
    </body>
</html>