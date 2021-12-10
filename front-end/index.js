function start() {
    let loginButton = document.querySelector('#btn_login');
    let startButton = document.querySelector('#btn_start');
    let logoutButton = document.querySelector('#btn_logout');
    loginButton.addEventListener('click', handleLogin);
    startButton.addEventListener('click', handleStart);
}

function handleLogin(){
    console.log("Login button clicked");

}

function handleStart(){
    console.log("Start button clicked");
    window.location.href = "game.html";
}

window.onload = start;