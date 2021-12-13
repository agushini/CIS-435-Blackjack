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
        <button id="btn_deal">Deal</button>
        <vr>
        <button id="btn_hit">Hit</button>
        <vr>
        <button id="btn_stay">Stay</button>
        <hr>
        <button id="test">Reset Game</button>
        <br>
        <input type="button" id="btn_logout" value="Logout">
        <br>
        

    </body>
</html>