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
}


//IMPLEMENT GAME MECHANICS
getComputerChoice() //loads up first computerChoice
//LOSE CONDITIONS
function playRound(playerSelection, computerChoice){
    if (playerSelection == "ROCK" && computerChoice == "PAPER") //lose rule
        {computerScore++;} //change score 
    if (playerSelection == "PAPER" && computerChoice == "SCISSORS") 
        {computerScore++;}
    if (playerSelection == "SCISSORS" && computerChoice == "ROCK") 
        {computerScore++;}
//DRAW CONDITIONS
    if (playerSelection === computerChoice); 
//WIN CONDITIONS
    if (playerSelection == "PAPER" && computerChoice == "ROCK") 
        {playerScore++;}
    if (playerSelection == "ROCK" && computerChoice == "SCISSORS") 
        {playerScore++;}
    if (playerSelection == "SCISSORS" && computerChoice == "PAPER") 
        {playerScore++;}
//GAME END CONDITIONS
    changeScoreDisplay()
    if (playerScore === 5) {alert("Game Over! You win!");playerScore = 0; computerScore = 0}
    if (computerScore === 5) {alert("Game Over! You win!"); playerScore = 0; computerScore = 0}    
}
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
