let audio= new Audio
function lion() {
    document.body.style.background="gold";
    document.getElementById('icon').innerHTML="🦁";
    document.getElementById('message').innerHTML="LION";
    audio.pause();
    audio= new Audio("sounds/dffdv-tiger-roar-loudly-193229.mp3");
    audio.play();
}

function elephant() {
    document.body.style.background="lightblue";
    document.getElementById('icon').innerHTML="🐘";
    document.getElementById('message').innerHTML="ELEPHANT";
    audio.pause();
    audio= new Audio("sounds/dragon-studio-elephant-trumpeting-494313.mp3");
    audio.play();
}
function cat() {
    document.body.style.background="grey";
    document.getElementById('icon').innerHTML="🐈‍⬛";
    document.getElementById('message').innerHTML="CAT";
    audio.pause();
    audio= new Audio("sounds/mixkit-sweet-kitty-meow-93.wav");
    audio.play();
}

function dog() {
    document.body.style.background="darkgrey";
    document.getElementById('icon').innerHTML="🐶"
    document.getElementById('message').innerHTML="DOG"
    audio.pause();
    audio= new Audio("sounds/dragon-studio-dog-barking-406629 (1).mp3")
    audio.play();
}

function stopsound(){
    audio.pause();
}
