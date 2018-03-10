
$(document).ready(function() {
    let computerNumber = Math.floor(Math.random()*100+10);
    $('#computerNumber').text(computerNumber);
    console.log(computerNumber);

//variables
gem1 = Math.floor(Math.random()*10+10);
$('#computerNumber').text(computerNumber);
gem2 = Math.floor(Math.random()*4+2);
$('#computerNumber').text(computerNumber);
gem3 = Math.floor(Math.random()*15+5);
$('#computerNumber').text(computerNumber);
gem4 = Math.floor(Math.random()*3+20);
$('#computerNumber').text(computerNumber);
wins = 0;
losses = 0;
totalScore = 0;


// CLEAR FUNCTION
const clear = function(){
    gem1 = "";
    gem2 = "";
    gem3 = "";
    gem4 = "";
    $('#gemImage').empty();
}

//WINS & LOSSES, TOTAL SCORE
$('#Wins').text(wins);
$('#Losses').text(losses);
$('#totalScore').text(losses);















})