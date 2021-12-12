let fullDeck = Array.from(Array(4), () => new Array(13));    //deck to reinitalize deck if we run out of elements
let playingDeck = Array.from(Array(4), () => new Array(13)); //deck we will deal from
let playerTurn = 1;
let cardLocation = 0;
let playerTotal = 0;
let dealerTotal = 0;

function start() { //getting everything setup on window load
    
    //in game.html
    let logoutButton = document.querySelector('#btn_logout');
    let hitButton = document.querySelector('#btn_hit');
    let stayButton = document.querySelector('#btn_stay');
    let dealButton = document.querySelector('#btn_deal');

    let testButton = document.querySelector('#test');
    
    //in game.html
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
        
    
    createDeck();//intialize new deck
}//end start()


function randomNum(a){ //returns 0-a randomly, no decimal and is inclusive
    let min=0;
    let max=a;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}// end randomNum()

function dealCard(){
    var y = randomNum(playingDeck.length-1); 
    var x = randomNum(playingDeck[y].length-1);
    var output = 0;
    
    /* 
    Testing purposes
    console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    console.log("Array indexes for the card  y,x: " + y + " " + x);
    console.log(playingDeck[y][x])
    console.log('full deck at location: ' + fullDeck[y][x])
    */
    output = playingDeck[y][x]; //this will be the card that is dealt
    playingDeck[y].splice(x,1);//remove that card from the deck
    
    console.log("Array indexes for the card  y,x: " + y + " " + x);
    testFunc(y,output);


    //console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    
    return output;

    //testing the deck thats what most of this console stuff is
    /*
    var temp =  playingDeck.length;
    console.log("output deck after splice: ")
    for(var i = 0; i < temp; i++){
        var temp1 = playingDeck[i].length;
        for(var j = 0; j < temp1; j++){
            console.log(playingDeck[i][j]);
        }
        console.log("newline");
    }
    */
}//end dealCard()

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
}//end copyDeck()

function createDeck(){    
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            fullDeck[i][j] = x;
            x++
        }
    }
    copyDeck();
}//end copyDeck

//-------------------------------------------------------------------------------------------------------
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

}//end testFunc()

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
//-------------------------------------------------------------------------------------------------------

function checkIfCardsLeft(){ //if the deck gets empty, it causes issues for the array and dealing so this is a "reshuffle"
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
}//end checkIfCardsLeft();

function checkBust(total, bustAt){
    if (total > bustAt){
        //playerTurn = 0; //might not need this here if i use this for player and dealer
        console.log("Player Total: BUST!! " + playerTotal);
        document.getElementById("playerTotal").innerHTML = "Player Total: BUST!! " + playerTotal;
        document.getElementById("whoWins").innerHTML = "Dealer Wins! Player busted!"; 

        return true;
    }
    else {
        return false;
    }

}//end checkBust()

//logout button should work now -Amaya
function handleLogout(){
    console.log("Logout button clicked");
    window.location.href = "index.html";
}//end handleLogout

function handleHit(){
    console.log("Hit button clicked");
    if (checkBust(playerTotal, 21) == true){
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
    playerTurn = 0;
    cardLocation = 2;
    dealerPlay();
}//handleStay

function dealerPlay(){

    while (dealerTotal <= 17) {
        if (checkBust(dealerTotal, 21)){
            document.getElementById("dealerTotal").innerHTML = "Dealer busted: " + dealerTotal; 
        }
        var cardValue = getCardValue(dealCard());
        dealerTotal = dealerTotal + cardValue;
        document.getElementById("dealerTotal").innerHTML = "Dealer Total: " + dealerTotal;
        /*
        if(cardLocation == 5){
            document.getElementById("dealerTotal").innerHTML = "Dealer busted: " + dealerTotal; 
            //dealer shouldn't bust at 5?
        }
        */
        console.log("Dealer Total: " + dealerTotal);
        cardLocation++;
        checkWin();
    }
}

function handleDeal(){ 
    if (checkIfCardsLeft() == false){
        copyDeck();
    }
    console.log("Deal button clicked");

    for (var i = 0; i < 2; i++){ //should deal two cards to dealer and player
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
}//handleDeal

function checkWin(){
    if((playerTotal > dealerTotal) || (dealerTotal > 21)){
        //player wins
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "incrementWin.php");
        xhttp.send();
        document.getElementById("whoWins").innerHTML = "Player Wins!";
    }
    else if ((playerTotal < dealerTotal) && (dealerTotal <= 21)){
        //player loses
        document.getElementById("whoWins").innerHTML = "Dealer Wins!";
    }
    else {
        document.getElementById("whoWins").innerHTML = "Nobody Wins, Tie";
        //push
    }
}


function resetGame(){

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