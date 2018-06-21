//score counter
var counter = 0;
var wins = 0;
var losses = 0;

//gem variables
var gem1;
var gem2;
var gem3;
var gem4;

//target number
var targetNum;

//generate random number from 1-12 inclusive
function generateRandoNum() {
    return Math.floor((Math.random() * 12) + 1);  
};

function checkScore() {
    if(counter === targetNum) {
        wins += 1;
        alert("Good job! You are a level " + wins + " Gem Master.");
        initGame();
    }
    else if(counter > targetNum) {
        losses += 1;
        alert("Sorry try again");
        initGame();
    }
}

//initialize game function
function initGame() {
    counter = 0;
    $("#count").text(counter);
    targetNum = Math.floor((Math.random() * 120) + 19);
    $("#targetNum").text(targetNum);
    gem1 = generateRandoNum();
    gem2 = generateRandoNum();
    gem3 = generateRandoNum();
    gem4 = generateRandoNum();
    $("#winCount").text(wins);
    $("#lossCount").text(losses);
}

//button interactivity
$(document).ready(function() {

    initGame();

    $("#btn").on("click", function() {
        counter += gem1;
        $("#count").text(counter);
        checkScore();
    });
    $("#btn-2").on("click", function() {
        counter += gem2;
        $("#count").text(counter);
        checkScore();
    });
    $("#btn-3").on("click", function() {
        counter += gem3;
        $("#count").text(counter);
        checkScore();
    });
    $("#btn-4").on("click", function() {
        counter += gem4;
        $("#count").text(counter);
        checkScore();
    });



});

    


