

//isolate my required variables
let gem1 = Math.floor(Math.random()*10+1);

let gem2 = Math.floor(Math.random()*2+4);

let gem3 = Math.floor(Math.random()*5+5);

let gem4 = Math.floor(Math.random()*3+10);

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



// When the page loads a random number should be generated and then displayed on the DOM
$(document).ready(function() {
      computerNumber = Math.floor(Math.random()*60+10);
      $('#computerNumber').text(computerNumber);
      console.log(computerNumber);

    });

// If the number is achieved, increment by one & display
// If the number is surpassed, increment by one & display

    function win(){
          wins++; 
          $('#Wins').html(wins);
        }
    
    function loser(){
            losses++; 
            $('#Losses').html(losses);
        }
    

//When a crystal is clicked on the random number is generated
$('#crystal1').on('click',function() {
   totalScore = totalScore + gem1;
    console.log($(totalScore));
    $(".totalScoredisplayed").html(totalScore);
    if (totalScore === computerNumber) {
       return win();
    } else if (totalScore > computerNumber) {
       return loser();
        }
})

$('#crystal2').on('click',function() {
    totalScore = totalScore + gem2;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win();
     } else if (totalScore > computerNumber) {
        return loser();
         }
 })

 $('#crystal3').on('click',function() {
    totalScore = totalScore + gem3;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win();
     } else if (totalScore > computerNumber) {
        return loser();
         }
 })

 $('#crystal4').on('click',function() {
    totalScore = totalScore + gem4;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win();
     } else if (totalScore > computerNumber) {
        return loser();
         }
 })
