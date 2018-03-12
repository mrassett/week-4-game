var randomResult;
var lost;
var win;

randomResult= Math.floor(Math.random() * 99) + 30;

$("#result").html('Random Result:' + randomResult);


for (let i = 0; 1 < 4 ; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
        crystal.attr({
            "class" : 'crystal',
            "data-random" : random
        });
    $(".crystals").append(crystal);

    }



