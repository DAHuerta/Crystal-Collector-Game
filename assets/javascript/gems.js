// Global variables
var goalNumber = 0;
var playerScore = 0;
var wins = 0;
var losses = 0;

var crystalImage = [];
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
        for (var i = 0; i < crystalImage.length; i++){
            var image = $("<img>")
            image.addClass("crystal")
            image.attr("data-value", Math.floor(Math.random() * 12) +1)
            image.attr("src", crystalImage[i])

        }


    }
        //for loop 0-4
        //create image tag
            //add class to image crystal .attr
        // random number 1-12
        //source .attr
        //pick crystal images randomly
        //append image to page
// Process
    //call reset game
    //document.on click
        //$("div").on("click", ".crystal", function) {
            // $(this)
            //parseint
                //add to score
            //check if one or loss
            //if won add to wins else losses
                //alert out
            //reset game
        //}