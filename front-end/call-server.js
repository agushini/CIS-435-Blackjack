var fullDeck = Array.from(Array(4), () => new Array(13));    //deck to reinitalize deck if we run out of elements
var playingDeck = Array.from(Array(4), () => new Array(13)); //deck we will deal from

function start() {
    //need to check if ef is null because otherwise we get an error of trying to assign to null variable
    let loginButton = document.querySelector('#btn_login');
    let startButton = document.querySelector('#btn_start');
    
    let logoutButton = document.querySelector('#btn_logout');
    let hitButton = document.querySelector('#btn_hit');
    let stayButton = document.querySelector('#btn_stay');
    let dealButton = document.querySelector('#btn_deal');
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

    createDeck();//intialize new deck
}


function randomNum(a){ //returns 0-a randomly, no decimal and is inclusive therefore chooses the turns when 0-1
    let min=0;
    let max=a;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dealCard(){
    var y = randomNum(playingDeck.length-1); 
    var x = randomNum(playingDeck[y].length-1);
    console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    console.log("Array indexes for the card  y,x: " + y + " " + x);
    console.log(playingDeck[y][x])
    console.log('full deck at location: ' + fullDeck[y][x])
    playingDeck[y][x]; //this will be the card that is dealt
    playingDeck[y].splice(x,1);//remove that card from the deck
    
    console.log(" y length : " + playingDeck.length + " x length : " + playingDeck[y].length);
    

    //testing the deck thats what most of this console stuff is
    var temp =  playingDeck.length;
    console.log("output deck after splice: ")
    for(var i = 0; i < temp; i++){
        var temp1 = playingDeck[i].length;
        for(var j = 0; j < temp1; j++){
            console.log(playingDeck[i][j]);
        }
        console.log("newline");
    }
}

function copyDeck(){
    for(var i = 0; i < 4; i++){
        var x = 1;
        for(var j = 0; j < 13; j++){
            playingDeck[i][j] = fullDeck[i][j] = x;
            x++
        }
    }
}

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

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 13; j++){
            console.log(fullDeck[i][j])
        }
        console.log("\n");
    }
}

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
}

function handleStay(){ // we need to do something with this
    console.log("Stay button clicked");

}

function handleDeal(){ // we need to do something with this
    console.log("Deal button clicked");
    dealCard();
}



window.onload = start;