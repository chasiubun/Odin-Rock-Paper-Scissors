//ROCK-PAPER-SCISSORS

//SETTING PLAYER SCORES AND VARIABLES
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerSelection;
let gameResult;

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
        {computerScore++; //code game result and change score
        //console.log("You lose!", computerChoice, " beats ", playerSelection); //notify user of game result & logic
        //console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);//test score keeper
    } 
    if (playerSelection == "PAPER" && computerChoice == "SCISSORS") 
        {gameResult = "win"; computerScore++; 
        // console.log("You lose!", computerChoice, " beats ", playerSelection); 
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
    }
    if (playerSelection == "SCISSORS" && computerChoice == "ROCK") {
        // console.log("You lose!", computerChoice, " beats ", playerSelection); 
        computerScore++; 
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
    }
//DRAW CONDITIONS
    if (playerSelection === computerChoice) 
        {
        // console.log("Draw!");
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore)
    }
//WIN CONDITIONS
    if (playerSelection == "PAPER" && computerChoice == "ROCK") 
        {playerScore++; 
        // console.log("You win!", playerSelection, " beats ", computerChoice); 
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    if (playerSelection == "ROCK" && computerChoice == "SCISSORS") 
        {playerScore++;
        // console.log("You win!", playerSelection, " beats ", computerChoice);
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    if (playerSelection == "SCISSORS" && computerChoice == "PAPER") 
        {playerScore++; 
        // console.log("You win!", playerSelection, " beats ", 
        // computerChoice);
        // console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    changeScoreDisplay()
    if (playerScore === 5) {alert("Game Over! You win!"); playerScore = 0; computerScore = 0}
    if (computerScore === 5) {alert("Game Over! You win!"); playerScore = 0; computerScore = 0}    
    }
function finalscore(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log("You win! Final score-- Player: " + playerScore + ", Computer: " + computerScore)
    }
}
function game(){
    //for (let round = 0; round < 5; round++){ //loop
        getComputerChoice(); //retrieve computer output
        userSelect(); //retrieve user input
        playRound(playerSelection, computerChoice)} ;
        finalscore(playerScore, computerScore);

//DOM MANIPULATION: 

    //ASSIGN PLAYER CHOICE TO BUTTONS
const buttonRock = document.getElementById('buttonRock');
const buttonScissors = document.getElementById('buttonScissors');
const buttonPaper = document.getElementById('buttonPaper');
    //DISPLAY SCORING
const playerScoreDisplay = document.getElementById("playerScore"); //grab the element
const computerScoreDisplay = document.getElementById("computerScore");

buttonRock.addEventListener(
    'click', () => 
        {playRound("ROCK", computerChoice); 
        getComputerChoice();} 
        //console.log(computerChoice);} // () => is used to apply the click to a function....After the click the button will also get another computer choice.
)
buttonScissors.addEventListener(
    'click',  () => 
        {playRound("SCISSORS", computerChoice);
        getComputerChoice();}
);

buttonPaper.addEventListener(
    'click',  () => 
    {playRound("PAPER", computerChoice);
    getComputerChoice();}
);

function changeScoreDisplay(){
    playerScoreDisplay.innerHTML = playerScore 
    computerScoreDisplay.innerHTML = computerScore
}
