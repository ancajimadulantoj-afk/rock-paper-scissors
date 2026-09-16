function getComputerChoice() {
    let numberAlt = Math.floor(Math.random() * 3)

    if (numberAlt === 0) {
        return "rock";
    } else if (numberAlt === 1) {
        return "paper";
    } else if (numberAlt === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose between rock, paper, or scissors").toLowerCase()
}


function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1
            return "You Lose! Paper beats Rock";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1
            return "You Win! Rock beats Scissors";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1
            return "You Lose! Scissors beats Paper";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1
            return "You Win! Paper beats Rock";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1
            return "You Lose! Rock beats Scissors";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1
            return "You Win! Scissors beats Paper";
        }
    }

    for (let i = 0; i < 5; i += 1) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }

    return `Final score: Human ${humanScore} - Computer ${computerScore}`
}

console.log(playGame())