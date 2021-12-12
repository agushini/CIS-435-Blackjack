function start() {

    let loginButton = document.querySelector('#btn_login');
    let startButton = document.querySelector('#btn_start');
    
    if(loginButton)
        loginButton.addEventListener('click', handleLogin);
    if(startButton)
        startButton.addEventListener('click', handleStart);
}

function handleLogin(){ // we need to do something with this
    console.log("Login button clicked");

}//end handleLogin

function handleStart(){
    console.log("Start button clicked");
    window.location.href = "game.html";
}//end handleStart    