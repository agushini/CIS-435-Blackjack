let fullDeck = Array.from(Array(4), () => new Array(13));    //deck to reinitalize deck if we run out of elements
let playingDeck = Array.from(Array(4), () => new Array(13)); //deck we will deal from
let playerTurn = 1;
let cardLocation = 0;
let playerTotal = 0;
let dealerTotal = 0;
var user = "";
let won = false;
let gameOver = false;
let firstDeal = false;

//Function fetches the cookie sent by login.php
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function start() {
    
    let logoutButton = document.querySelector('#btn_logout');
    let hitButton = document.querySelector('#btn_hit');
    let stayButton = document.querySelector('#btn_stay');
    let dealButton = document.querySelector('#btn_deal');
    let testButton = document.querySelector('#test');
    
    if(logoutButton)
        logoutButton.addEventListener('click', handleLogout);
    if (hitButton)
        hitButton.addEventListener('click', handleHit);
    if(stayButton)
        stayButton.addEventListener('click', handleStay);
    if(dealButton)
        dealButton.addEventListener('click', handleDeal);

    if(testButton)
        testButton.addEventListener('click', resetGame);  
        
    //intialize new deck
    createDeck();
}

//returns 0-a randomly, no decimal and is inclusive
function randomNum(a){ 
    let min=0;
    let max=a;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dealCard(){
    var y = randomNum(playingDeck.length-1); 
    var x = randomNum(playingDeck[y].length-1);
    var output = 0;
    
    //this will be the card that is dealt
    output = playingDeck[y][x];
    //remove that card from the deck
    playingDeck[y].splice(x,1);
    
    console.log("Array indexes for the card  y,x: " + y + " " + x);
    testFunc(y,output);
    
    return output;
}

function getCardValue(card){
    var output = 0;
    switch (card){
        case 11:
        case 12:
        case 13:
            output = 10;
            break;
        default:
            output = card;
            break;
    }
    return output;
}

function copyDeck(){
    console.log("Deck Copied");
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            playingDeck[i][j] = fullDeck[i][j] = x;
            x++
        }
    }
}

function createDeck(){    
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            fullDeck[i][j] = x;
            x++
        }
    }
    copyDeck();
}

function testFunc (cardSuit, cardNum) {
    var card;
    var player;
    var playerName;

    switch(cardNum){
        case 1:
            cardNum = 'A';
            break;
        case 11:
            cardNum = 'J';
            break;
        case 12:
            cardNum = 'Q';
            break;
        case 13:
            cardNum = 'K';
            break;
        default:   
            break;
        }

    switch(cardSuit){
        case 0:
            cardSuit = 'C';
            break;
        case 1:
            cardSuit = 'D';
            break;
        case 2:
            cardSuit = 'H';
            break;
        case 3:
            cardSuit = 'S';
            break;
        default:  
            break;
    }

    switch(playerTurn){
        case 0:
            playerName = 'd';
            break;
        case 1:
            playerName = 'p';
            break;
        default:
            break;   
    }

    console.log(cardNum + cardSuit + " " + playerName + cardLocation); 
    card = cardNum + cardSuit; 
    player = playerName + cardLocation; 
    displayCard(card, player);

}

//displays a card on the screen. Takes in 2 strings: one for the card png, and one for the location
//i.e. card = "2C"  player = "d4"
function displayCard (card, player) {
    var imgCode = "cards/" + card + ".png";
	var img = document.createElement("img");
	img.src = imgCode;

    img.style.width = '120px';
    img.style.height = 'auto';

	var div = document.getElementById(player);
	div.firstElementChild.replaceWith(img);
}

//if the deck gets empty, it causes issues for the array and dealing so this is a "reshuffle"
function checkIfCardsLeft(){ 
    var count = 0;
    for (var i = 0; i < playingDeck.length; i++){
        for (var j = 0; j < playingDeck[i].length; j++){
            count ++;
        }
    }
    console.log(" Count: " + count);
    if (count >= 13){
        return true;
    }
    else if (count < 13){
        return false;
    }
}

function checkBust(total, bustAt){
    if (total > bustAt){
        console.log("Player Total: BUST!! " + playerTotal);
        document.getElementById("playerTotal").innerHTML = "Player Total: BUST!! " + playerTotal;
        document.getElementById("whoWins").innerHTML = "Dealer Wins! Player busted!";
        gameOver = true;
        return true;
    }
    else {
        return false;
    }

}

//logout button should work now -Amaya
function handleLogout(){
    if (won) {
        incrementWin();
        alert("Logging out and updating wins for user.");
    }
    console.log("Logout button clicked");
    window.location.href = "index.php";
}

function handleHit(){
    console.log("Hit button clicked");
    if (gameOver) {
        alert("Game over. Please restart game.");
    }
    else if (!firstDeal) {
        alert("Can't hit until after the first deal.");
    }
    else if (checkBust(playerTotal, 21) == true){
        console.log("Should be a bust");
        playerTurn = 0;
    } else {
        playerTurn = 1;
        cardLocation++;
        var cardValue = getCardValue(dealCard());
         
        playerTotal = playerTotal + cardValue;
        document.getElementById("playerTotal").innerHTML = "Player Total: " + playerTotal;

        checkBust(playerTotal, 21);
        if(cardLocation == 5){
            document.getElementById("playerTotal").innerHTML = "Player got to 5 cards: WIN!! "; 
        }
        console.log("Player total: " + playerTotal);
    }
}//handleHit

function handleStay(){ 
    //stay should just switch the turns to the dealer
    console.log("Stay button clicked");
    if (gameOver) {
        alert("Game over. Please restart game.");
    }
    else if (!firstDeal) {
        alert("Can't stay until after the first deal.");
    } else {
        playerTurn = 0;
        cardLocation = 2;
        dealerPlay();
    }
}

function dealerPlay(){

    while (dealerTotal <= 17 || dealerTotal < playerTotal) {
        if (checkBust(dealerTotal, 21)){
            document.getElementById("dealerTotal").innerHTML = "Dealer busted: " + dealerTotal; 
        }
        var cardValue = getCardValue(dealCard());
        dealerTotal = dealerTotal + cardValue;
        document.getElementById("dealerTotal").innerHTML = "Dealer Total: " + dealerTotal;
        console.log("Dealer Total: " + dealerTotal);
        cardLocation++;
    }
    checkWin();
}

function handleDeal(){ 
    if (checkIfCardsLeft() == false){
        copyDeck();
    }
    console.log("Deal button clicked");

    if (gameOver) {
        alert("Game over. Please restart game.");
    } else {
        //should deal two cards to dealer and player
        if (!firstDeal) {
            firstDeal = true;
        }
        for (var i = 0; i < 2; i++){ 
            cardLocation++;
            var card = getCardValue(dealCard());;
            playerTotal = playerTotal + card;
            document.getElementById("playerTotal").innerHTML = "Player Total: " + playerTotal;
            playerTurn = 0;
            console.log("To player: " + card);
            if (i == 0) {
                card = getCardValue(dealCard());
                dealerTotal = dealerTotal + card;
                document.getElementById("dealerTotal").innerHTML = "Dealer Total: " + dealerTotal;
                playerTurn = 1;
                console.log("To dealer: " + card);
            }
            console.log("Player Total: " + playerTotal + " Dealer Total: " + dealerTotal);  
        }
        if (checkBust(playerTotal, 21) == true){
            playerTurn = 0;
        }
    }
}

function checkWin(){
    if((playerTotal > dealerTotal) || (dealerTotal > 21)){
        document.getElementById("whoWins").innerHTML = "Player Wins!";
        won = true;
        gameOver = true;
    }
    else if ((playerTotal < dealerTotal) && (dealerTotal <= 21)){
        document.getElementById("whoWins").innerHTML = "Dealer Wins!";
        won = false;
        gameOver = true;
    }
    else {
        document.getElementById("whoWins").innerHTML = "Nobody Wins, Tie";
        won = false;
        gameOver = true;
    }
}

function incrementWin(){
    var username = getCookie("user");
    window.location.href = "incrementWin.php?User=" + username;
}


function resetGame(){
    
    if (won) {
        incrementWin();
        won = false;
    }

    gameOver = false;
    playerTurn = 1;
    playerTotal = 0;
    dealerTotal = 0;
    cardLocation = 0;
    document.getElementById("dealerTotal").innerHTML = "Dealer Total: ";
    document.getElementById("playerTotal").innerHTML = "Player Total: ";
    document.getElementById("whoWins").innerHTML = "";

	var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';

	img.src = "cards/red_back.png";
	var div = document.getElementById("d1");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';

	img.src = "cards/yellow_back.png";
	var div = document.getElementById("d2");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/green_back.png";
	var div = document.getElementById("d3");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/blue_back.png";
	var div = document.getElementById("d4");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/purple_back.png";
	var div = document.getElementById("d5");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';

	img.src = "cards/red_back.png";
	var div = document.getElementById("p1");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';

	img.src = "cards/yellow_back.png";
	var div = document.getElementById("p2");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/green_back.png";
	var div = document.getElementById("p3");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/blue_back.png";
	var div = document.getElementById("p4");
	div.firstElementChild.replaceWith(img);

    var img = document.createElement("img");
    img.style.width = '120px';
    img.style.height = 'auto';
    
	img.src = "cards/purple_back.png";
	var div = document.getElementById("p5");
	div.firstElementChild.replaceWith(img);
}

window.onload = start;