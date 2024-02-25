let compArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let started = false;


if (!started) {
    $(document).keydown(function() {
        started = true;
        $('#roboScore').text('Computer Score: ' + computerScore);
        $('#playerScore').text('Player Score: ' + playerScore);
        $('h1').text("Lets go!")
    })
}



    $(".btn").click(function() {
        if (started) {
          let playerSelection = $(this).attr("id");
          playRound(playerSelection);
        }
    })
    


    function playRound(yourChoice) {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerSelection = compArray[randomNumber];

    
        $('#roboSelection').text('MR ROBO SELECTS ' + computerSelection.toUpperCase());
        
        


        if (yourChoice == computerSelection) {
            $('h1').text("Draw!")
        } else if (yourChoice == 'rock' && computerSelection == 'paper' || yourChoice == 'paper' && computerSelection == 'scissors' || yourChoice == 'scissors' && computerSelection == 'rock') {
            $('h1').text("Mr Robot wins!");
            computerScore++;
            $('#roboScore').text('Computer Score: ' + computerScore);
            scoreChecker();
        } else {
            $('h1').text("You win!")
            playerScore++;
            $('#playerScore').text('Player Score: ' + playerScore);
            scoreChecker();
        } 
    }


        function scoreChecker() {
            console.log('computer score = ' + computerScore + ' player score = ' + playerScore);

            if (computerScore == 5) {
                $('h1').text("Mr Robot Wins! Press any key to restart!");
                restart();
            } else if (playerScore == 5) {
                $('h1').text("You win! Press any key to restart!");
                restart();
            }
        }



        function restart() {
            started = false;
            playerScore = 0;
            computerScore = 0;
        }




