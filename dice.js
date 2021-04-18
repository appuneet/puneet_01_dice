// taking names of players.
var n1 = prompt("Enter player 1's name:");
var n2 = prompt("Enter player 2's name:");

// capitalise word.
var name1 = n1.toUpperCase();
var name2 = n2.toUpperCase();


// changing name.
document.querySelector(".dice #plr1").textContent = name1;
document.querySelector(".dice #plr2").textContent = name2;

// changing heading as required.
document.querySelector("#head").textContent = name1 + " V/S " + name2;

// onclick function. (you can also use other method.)
document.querySelector("#btn").onclick = function () { myFunc() }

// function that changes the content.
function myFunc() {
    // this is random dice number for player 1.
    var p1 = Math.round(Math.random() * 5);

    // this is random dice number for player 2.
    var p2 = Math.round(Math.random() * 5);

    // array of all images.
    var myPix = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    // commands to change the winning line.
    if (p1 > p2) {
        document.querySelector("header h1").textContent = "🚩" + name1 + " WINS."
    }
    else if (p1 === p2) {
        document.querySelector("header h1").textContent = "DRAW!"
    }
    else {
        document.querySelector("header h1").textContent = name2 + " WINS.🚩"
    }

    // changing image by accessing array myPix.
    document.querySelector(".img1").src = myPix[p1]
    document.querySelector(".img2").src = myPix[p2]
}
