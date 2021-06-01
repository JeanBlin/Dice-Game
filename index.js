// Random number generator from 0 to 5
var rand1 = Math.floor(Math.random() * 6);
var rand2 = Math.floor(Math.random() * 6);

// Image box
var images = [];
images[0] = "images\\dice1.png";
images[1] = "images\\dice2.png";
images[2] = "images\\dice3.png";
images[3] = "images\\dice4.png";
images[4] = "images\\dice5.png";
images[5] = "images\\dice6.png";

// Set Dice 1's image
document.querySelector('.img1').setAttribute('src', images[rand1]);

// Set Dice 2's image
document.querySelector('.img2').setAttribute('src', images[rand2]);

// Declare Winner
if (rand1 > rand2){
    document.querySelector('.heading').innerHTML = '&#128681 Player 1 WINS!';

} else if (rand1 < rand2){
    document.querySelector('.heading').innerHTML = 'Player 2 WINS! &#128681';

} else {
    document.querySelector('.heading').innerHTML = 'DRAW!';
}