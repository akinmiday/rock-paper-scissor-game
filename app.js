const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}) )

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)
    if (randomNumber === 1){
        computerChoice = 'rock'
    }if (randomNumber === 2){
        computerChoice = 'Scissor'
    }  if (randomNumber === 1){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "Scissor"){
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === "Scissor"){
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result = 'You lose!'
    }
    if (computerChoice === 'Scissor' && userChoice === "rock"){
        result = 'You win!'
    }
    if (computerChoice === 'Scissor' && userChoice === "paper"){
        result = 'You Lose!'
}
resultDisplay.innerHTML = result
}
