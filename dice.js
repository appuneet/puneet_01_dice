document.getElementById("btn").onclick = function() {myFunc()}

function myFunc(){
// this is random dice number for player 1.
var p1 = Math.round(Math.random()*5);

// this is random dice number for player 2.
var p2 = Math.round(Math.random()*5);

// array of all images.
var myPix = ["images/dice1.png","images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// commands to change the winning line.
if (p1>p2){
    document.querySelector(".container h1").textContent="Player 1 Wins."
}
else if (p1===p2){
    document.querySelector(".container h1").textContent="It's a tie."
}
else {
    document.querySelector(".container h1").textContent="Player 2 Wins."
}

// changing image by accessing array myPix.
document.querySelector(".img1").src=myPix[p1]
document.querySelector(".img2").src=myPix[p2]
}
