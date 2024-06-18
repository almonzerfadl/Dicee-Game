var randomNUmber1 = Math.random();
randomNUmber1 = randomNUmber1 * 6;
randomNUmber1 = Math.floor(randomNUmber1) + 1;


var randomDiceImage = "dice" + randomNUmber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNUmber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNUmber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if (randomNUmber1 > randomNUmber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";

}
else if (randomNUmber2 > randomNUmber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}