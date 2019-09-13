// Global variables
var goalNumber = 0;
var playerScore = 0;
var wins = 0;
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
        console.log(goalNumber);
        //playerScore = 0 
        score = 0;
        //update goal on display .text
        $(".goal").text(goalNumber);
        //Update wins and losses .text
        $(".wins").text(wins);
        $(".losses").text(losses);
        //update player score on page .text
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
            //pick crystal images randomly
            //append image to page
            $(".crystalContainer").append(image);
        }
    }
// Process
$(document).ready(function() {
    //call reset game
    reset()

    //document.on click
    $(".crystalContainer").on("click", ".crystal", function () {
        $(this)
        var crystalValue = ($(this).attr("data-value"))
        //parseint
            //add to score
         crystalValue = parseInt(playerScore)
        //check if won or loss
        console.log(crystalValue)

        if (playerScore === goalNumber) {
            alert("CONGRATS! YOU WIN!!")
            //if won add to wins 
            win++
        } else if (playerScore > goalNumber) {
            alert("YOU LOSE!")
            //else losses
            losses++
        }
        
    })
    
    //reset game
    reset()
})
  
                
    