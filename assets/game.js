
//isolate my required variables
let gem1 = Math.floor(Math.random()*10+1);

let gem2 = Math.floor(Math.random()*2+4);

let gem3 = Math.floor(Math.random()*5+5);

let gem4 = Math.floor(Math.random()*3+10);

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

const restart = function() {
    totalScore = 0;
    $(".totalScoredisplayed").empty();
}

// If the number is achieved, increment by one & display
// If the number is surpassed, increment by one & display

    function win(){
          wins++; 
          $('#Wins').html(wins);
          restart();
          gem1 = Math.floor(Math.random()*10+1);
          gem2 = Math.floor(Math.random()*2+4);
          gem3 = Math.floor(Math.random()*5+5);
          gem4 = Math.floor(Math.random()*3+10);
          computerNumber = Math.floor(Math.random()*60+10);
          $('#computerNumber').text(computerNumber);
        }
    
    function loser(){
            losses++; 
            $('#Losses').html(losses);
            restart();
            gem1 = Math.floor(Math.random()*10+1);
            gem2 = Math.floor(Math.random()*2+4);
            gem3 = Math.floor(Math.random()*5+5);
            gem4 = Math.floor(Math.random()*3+10);
            computerNumber = Math.floor(Math.random()*60+10);
            $('#computerNumber').text(computerNumber);
        }
    
//When a crystal is clicked on the random number is generated
$('#crystal1').on('click',function() {
   totalScore = totalScore + gem1;
    console.log($(totalScore));
    $(".totalScoredisplayed").html(totalScore);
    if (totalScore === computerNumber) {
       return win(); 
       return restart;  

    } else if (totalScore > computerNumber) {
       return loser(); 
       return restart;
        }
})

$('#crystal2').on('click',function() {
    totalScore = totalScore + gem2;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win();  
        return restart; 

     } else if (totalScore > computerNumber) {
        return loser();
        return restart;
         }
 })

 $('#crystal3').on('click',function() {
    totalScore = totalScore + gem3;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win();  
        return restart; 

     } else if (totalScore > computerNumber) {
        return loser();
        return restart;
         }
 })

 $('#crystal4').on('click',function() {
    totalScore = totalScore + gem4;
     console.log($(totalScore));
     $(".totalScoredisplayed").html(totalScore);
     if (totalScore === computerNumber) {
        return win(); 
        return restart; 

     } else if (totalScore > computerNumber) {
        return loser();   
        return restart;
         }
 })


