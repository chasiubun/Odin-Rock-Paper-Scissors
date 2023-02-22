//ROCK-PAPER-SCISSORS

//SETTING PLAYER SCORES AND VARIABLES
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerSelection;

//RETRIEVE & STORE COMPUTER INPUT(ROCK, PAPER, OR SCISSORS) VIA RANDOM NUMBER
function getComputerChoice(){
    let number = Math.floor(Math.random()*3); 
    if (number == 1) {
        computerChoice = "ROCK";
        return computerChoice;
    }
    else if (number == 2) {
        computerChoice = "PAPER";
        return computerChoice;
    }
    else if (number == 0) {
        computerChoice = "SCISSORS";
        return computerChoice;
    }
        //console.log(computerChoice) //check result
}
        //getComputerChoice();
        //console.log(computerChoice) //check result

//IMPLEMENT GAME MECHANICS
//RETRIEVE USER INPUT(ROCK, PAPER, OR SCISSORS) VIA PROMPT
function userSelect(){
    playerSelection = prompt("Rock, Paper, Scissors?"); 
    playerSelection = playerSelection.toUpperCase();//convert errors in casing;
    return playerSelection}
//ERROR CONDITIONS
    //if (playerSelection != "ROCK" || "PAPER" || "SCISSORS"); {console.log("invalid input")};
//LOSE CONDITIONS
function playRound(playerSelection, computerChoice){
    if (playerSelection == "ROCK" && computerChoice == "PAPER") //lose rule
        {console.log("You lose!", computerChoice, " beats ", playerSelection); //notify user of game result & logic
        computerScore++; //score changer
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);//test score keeper
    } 
    if (playerSelection == "PAPER" && computerChoice == "SCISSORS") 
        {console.log("You lose!", computerChoice, " beats ", playerSelection); 
        computerScore++; 
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
    }
    if (playerSelection == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You lose!", computerChoice, " beats ", playerSelection); 
        computerScore++; 
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
    }
//DRAW CONDITIONS
    if (playerSelection === computerChoice) 
        {
        console.log("Draw!");
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore)
    }
//WIN CONDITIONS
    if (playerSelection == "PAPER" && computerChoice == "ROCK") 
        {console.log("You win!", playerSelection, " beats ", computerChoice); 
        playerScore++; 
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    if (playerSelection == "ROCK" && computerChoice == "SCISSORS") 
        {console.log("You win!", playerSelection, " beats ", computerChoice);
        playerScore++; 
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    if (playerSelection == "SCISSORS" && computerChoice == "PAPER") 
        {console.log("You win!", playerSelection, " beats ", 
        computerChoice);playerScore++; 
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    }
function finalscore(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log("You win! Final score-- Player: " + playerScore + ", Computer: " + computerScore)
    }
}
function game(){
    for (let round = 0; round < 5; round++){ //loop
        getComputerChoice(); //retrieve computer output
        userSelect(); //retrieve user input
        playRound(playerSelection, computerChoice)} ;
        finalscore(playerScore, computerScore);
}
game()