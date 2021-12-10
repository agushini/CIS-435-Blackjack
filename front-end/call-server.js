let fullDeck = Array.from(Array(4), () => new Array(13));    //deck to reinitalize deck if we run out of elements
let playingDeck = Array.from(Array(4), () => new Array(13)); //deck we will deal from
let playerTurn;
let playerTotal = 0; //this is the total for now until someone implements the database login function
let dealerTotal = 0;

function start() {

    let loginButton = document.querySelector('#btn_login');
    let startButton = document.querySelector('#btn_start');
    
    let logoutButton = document.querySelector('#btn_logout');
    let hitButton = document.querySelector('#btn_hit');
    let stayButton = document.querySelector('#btn_stay');
    let dealButton = document.querySelector('#btn_deal');

    let testButton = document.querySelector('#test');
    
    //need to check if ef is null because otherwise we get an error of trying to assign to null variable
    if(loginButton)
        loginButton.addEventListener('click', handleLogin);
    if(startButton)
        startButton.addEventListener('click', handleStart);
    
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
        testButton.addEventListener('click', testFunc);  
        
    
    createDeck();//intialize new deck
}


function randomNum(a){ //returns 0-a randomly, no decimal and is inclusive
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
    /* Testing purposes
    console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    console.log("Array indexes for the card  y,x: " + y + " " + x);
    console.log(playingDeck[y][x])
    console.log('full deck at location: ' + fullDeck[y][x])
    */
    output = playingDeck[y][x]; //this will be the card that is dealt
    playingDeck[y].splice(x,1);//remove that card from the deck
    
    console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    
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
    }*/
}//end dealCard()

function copyDeck(){
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            playingDeck[i][j] = fullDeck[i][j] = x;
            x++
        }
    }
}//end copyDeck()

function createDeck(){
    //fullDeck = [[1,2,3,4,5,6,7,8,9,10,11,12,13]     //clubs 1=ACE 11=Jack 12=Queen 13=King
    //            [1,2,3,4,5,6,7,8,9,10,11,12,13]     //diamonds                  
    //            [1,2,3,4,5,6,7,8,9,10,11,12,13]     //hearts
    //            [1,2,3,4,5,6,7,8,9,10,11,12,13]]    //spades
    
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            fullDeck[i][j] = x;
            x++
        }
    }

    copyDeck();

    //for testing purposes
    /*
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 13; j++){
            console.log(fullDeck[i][j])
        }
        console.log("\n");
    }*/
}//end copyDeck

//-------------------------------------------------------------------------------------------------------
function testFunc () {
    var card;
    var player;
    var cardNum = Math.floor(Math.random() * (13 - 1 + 1) + 1);
    var cardSuit = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    var playerName = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    var playerNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);

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
    }

    switch(cardSuit){
        case 1:
            cardSuit = 'C';
            break;
        case 2:
            cardSuit = 'D';
            break;
        case 3:
            cardSuit = 'H';
            break;
        case 4:
            cardSuit = 'S';
            break;
        default:   
    }

    switch(playerName){
        case 1:
            playerName = 'd';
            break;
        case 2:
            playerName = 'p';
            break;
        default:   
    }

    console.log(cardNum + cardSuit + " " + playerName + playerNum); 

    card = cardNum + cardSuit;
    player = playerName + playerNum;
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
//-------------------------------------------------------------------------------------------------------



function handleLogin(){ // we need to do something with this
    console.log("Login button clicked");

}

function handleStart(){
    console.log("Start button clicked");
    window.location.href = "game.html";
}    

//For some reason the logout button doesn't work
function handleLogout(){
    console.log("Logout button clicked");
    window.location.href = "index.html";
}

function handleHit(){ // we need to do something with this
    console.log("Hit button clicked");
    playerTotal = playerTotal + dealCard();
}

function handleStay(){ 
    //stay should just switch the turns to the dealer
    console.log("Stay button clicked");
}

function handleDeal(){ 
    console.log("Deal button clicked");
    dealCard();

}



window.onload = start;