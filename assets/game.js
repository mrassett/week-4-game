

//isolate my required variables
let gem1 = Math.floor(Math.random()*10+11);

let gem2 = Math.floor(Math.random()*11+4);

let gem3 = Math.floor(Math.random()*15+5);

let gem4 = Math.floor(Math.random()*3+20);

$('#show1').html(gem1);
$('#show2').html(gem2);
$('#show3').html(gem3);
$('#show4').html(gem4);

let wins = 0;
let losses = 0;
let totalScore = 0;
let computerNumber = 0;

$("#Wins").html(wins);
$("#Losses").html(losses);
$(".totalScoredisplayed").html(totalScore);


// When the page loads a random number should be generated and then displayed on the DOM
$(document).ready(function() {
      computerNumber = Math.floor(Math.random()*100+10);
      $('#computerNumber').text(computerNumber);
      console.log(computerNumber);

    });

// If the number is achieved, increment by one & display
// If the number is surpassed, increment by one & display

    function win(){
        alert("win!");
          wins++; 
          $('#Wins').html(wins);
        }
    
    function loser(){
        alert("lose!");
            lose++; 
            $('#Losses').html(losses);
        }
    

//When a crystal is clicked on the random number is generated
$('#crystal1').click(function() {
    document.getElementById("crystal1").value = gem1;
    if (totalScore < computerNumber) {
        totalScore + gem1;
    } else if (totalScore === computerNumber) {
        win();
    } else if (totalScore > computerNumber) {
        loser();
    }
})
console.log(gem1);

$('#crystal2').click(function() {
    document.getElementById("crystal2").value = gem2;
 
})

$('#crystal3').click(function() {
   document.getElementById("crystal3").value = gem3;
    
})

$('#crystal4').click(function() {
    document.getElementById("crystal4").value = gem4;
    
})

