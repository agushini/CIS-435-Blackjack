<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>BlackJack!</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="gameStyles.css">
        <script src="game.js"></script>
    </head>
    <body>
        <header id="header">
            <p></p>
        </header>
        <div>
            <h2> Dealers Hand</h2>
            <div class="dealers_hand">
                <div class="grid-item" id="d1">
                    <img src=cards/red_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="d2">
                    <img src=cards/yellow_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="d3">
                    <img src=cards/green_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="d4">
                    <img src=cards/blue_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="d5">
                    <img src=cards/purple_back.png width="100%" height="auto">
                </div>
            </div>
            <br>
            <h3 id="dealerTotal">Dealer Total: </h3>

            <h2> Players Hand</h2>
            <div class="players_hand">
                <div class="grid-item" id="p1">
                    <img src=cards/red_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="p2">
                    <img src=cards/yellow_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="p3">
                    <img src=cards/green_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="p4">
                    <img src=cards/blue_back.png width="100%" height="auto">
                </div>
                <div class="grid-item" id="p5">
                    <img src=cards/purple_back.png width="100%" height="auto">
                </div>
            </div>
            
        </div>
        <br>
        <h3 id="playerTotal"> Player Total: </h3>
        <br>
        <h3 id = "whoWins"> </h3>
        <div id=btngroup>

        <a class="et_pb_button" id="btn_deal" href="#">Deal</a>
        <a class="et_pb_button"  id="btn_hit" href="#">Hit</a>
         <a class="et_pb_button"id="btn_stay" href="#">Stay</a>
        <hr></div>
        <a class="et_pb_button"  id="btn_logout" href="#">User Logout</a>
         <a class="et_pb_button" id="test" href="#">Reset Game</a>


    </body>
</html>