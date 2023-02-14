import random
getComputerChoice = random.randint(1, 3)
if getComputerChoice == 1:
    getComputerChoice = "Rock"
elif getComputerChoice == 2:
    getComputerChoice = "Paper"
elif getComputerChoice == 3:
    getComputerChoice = "Scissors"
print(getComputerChoice)

getPlayerChoice = input("Rock, Paper, Scissors?")

if getComputerChoice == getPlayerChoice:
    print("Draw! Play again!")
elif (getComputerChoice == "Rock" and getPlayerChoice == "Scissors") or (getComputerChoice == "Paper" and getPlayerChoice == "Rock") or (getComputerChoice == "Scissors" and getPlayerChoice == "Paper"):
    print("You played: " getPlayerChoice "and Computer played: " getComputerChoice". You win!")
elif (getPlayerChoice == "Rock" and getComputerChoice == "Scissors") or (getPlayerChoice == "Paper" and getComputerChoice == "Rock") or (getPlayerChoice == "Scissors" and getComputerChoice == "Paper"):
    print("You played: " getPlayerChoice "and Computer played: " getComputerChoice". You Lose!")
