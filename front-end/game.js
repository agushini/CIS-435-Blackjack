function start() {
    logoutButton.addEventListener('click', handleLogout);  
}

function handleLogout(){
    console.log("Logout button clicked");
    window.location.href = "index.html";
}

window.onload = start;