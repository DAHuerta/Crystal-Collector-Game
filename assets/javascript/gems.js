// Global variables
var goalNumber = 0;
var playerScore = 0;
var winCount = 0;
var losses = 0;

var crystalImage = ["assets/images/blueCrystal.jpg", "assets/images/greenCrystal.jpg", "assets/images/purpleCrystal.jpg", "assets/images/whiteCrystal.jpg"];

// Functions
    //resetFunction
    function reset(){
        //clear out old crystals
        $(".crystalContainer").empty()
        makeCrystals()
        //goal = between 19-120
        goalNumber = Math.floor((Math.random()) * 102) + 19;
        //playerScore = 0 
        score = 0;
        //update goal on display .text
        $(".goal").text(goalNumber);
        //Update wins and losses .text
        $(".wins").text(winCount);
        $(".losses").text(losses);
        //update player score on page .text
        playerScore = 0
        $(".playerScore").text(playerScore);
    }

    //makeCrystalsFunction
    function makeCrystals() {
        //for loop 0-4
        for (var i = 0; i < crystalImage.length; i++){
            //create image tag
            var image = $("<img>");
            //add class to image crystal .attr
            image.addClass("crystal");
            // random number 1-12
            image.attr("data-value", Math.floor(Math.random() * 12) +1);
            //source .attr
            image.attr("src", crystalImage[i]);
            //append image to page
            $(".crystalContainer").append(image);            
        }  
    }

// Process
$(document).ready(function() {
    //call reset game
    reset();

    //document.on click
    $(".crystalContainer").on("click", ".crystal", function () {
       //parseint
       var imageVALUE = parseInt($(this).attr("data-value"));
       
       //add to score
        playerScore += imageVALUE;

        $(".playerScore").text(playerScore)
    
         //check if won or loss
        if (playerScore === goalNumber) {
            //if won add to wins 
            winCount++;
            alert("CONGRATS! YOU WIN!!");
            reset()
        } else if (playerScore > goalNumber) {
            //else losses
            losses++;
            alert("YOU LOSE!");
            //reset game
            reset()
        }
    })    
})
  
                
    