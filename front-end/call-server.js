

function handleLogin(){
    console.log("login button clicked");
}

function handleStart(){
    console.log("start button clicked");
}

function start() {
    const loginButton = document.querySelector('#btn_login');
    const startButton = document.querySelector('#btn_start');

    loginButton.onclick = handleLogin();
    startButton.onclick = handleStart();
}

window.onload = start;