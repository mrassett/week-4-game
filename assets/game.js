
// I need to isolate my required variables
//variables
var gem1 = Math.floor(Math.random()*10+10);
console.log(gem1);

var gem2 = Math.floor(Math.random()*4+2);
console.log(gem2);

var gem3 = Math.floor(Math.random()*15+5);
console.log(gem3);

var gem4 = Math.floor(Math.random()*3+20);
console.log(gem4);

var wins = 0;
var losses = 0;
var totalScore = 0;
var computerNumber = 0;

// When the page loads a random number should be generated and then displayed on the DOM
$(document).ready(function() {
    computerNumber = Math.floor(Math.random()*100+10);
    $('#computerNumber').text(computerNumber);
    console.log(computerNumber);
});

// When user clicks on crystal, have the value assigned show up under total score area //
function addNumber(gemValue){
    // value of the gem clicked should be added to value of totalscore //
    totalScore += gemValue  
    // and then total score needs to be added to the DOM //
    $('#tScore').text(totalScore);
};

//The new total score is displayed on the DOM //
$('#button1').click();//run some function//)

$('#one').click(addNumber(gem1));






// CLEAR FUNCTION


//WINS & LOSSES, TOTAL SCORE


