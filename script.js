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

let reset = document.querySelector(".reset")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let score = document.querySelector(".score")
let message = document.querySelector(".message")
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

function endGame() {
    if (humanScore === 5) {
        let finalMessage = document.createElement("p")
        finalMessage.textContent = `Game Over! You win with a final score of ${humanScore} - ${computerScore}!`
        message.prepend(finalMessage)
        finalMessage.classList.add("finalmsg")
        
        reset.innerHTML = ""
        let resetBtn = document.createElement("button")
        resetBtn.textContent = "Reset Game"
        reset.appendChild(resetBtn)
        resetBtn.classList.add("resetbtn")

        resetBtn.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            rock.disabled = false
            paper.disabled = false
            scissors.disabled = false
            score.textContent = "Score: 0-0"
            message.innerHTML = ""
            reset.innerHTML = ""
        })

        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
    } else if (computerScore === 5) {
        let finalMessage = document.createElement("p")
        finalMessage.textContent = `Game Over! You lose with a final score of ${humanScore} - ${computerScore}!`
        message.prepend(finalMessage)
        finalMessage.classList.add("finalmsg")

        reset.innerHTML = ""
        let resetBtn = document.createElement("button")
        resetBtn.textContent = "Reset Game"
        reset.appendChild(resetBtn)
        resetBtn.classList.add("resetbtn")

        resetBtn.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            rock.disabled = false
            paper.disabled = false
            scissors.disabled = false
            score.textContent = "Score: 0-0"
            message.innerHTML = ""
            reset.innerHTML = ""
        })

        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
    }
}

rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const humanChoice = "rock"
    let result = playRound(humanChoice, computerChoice)
    score.textContent = `Score ${humanScore} - ${computerScore}`

    let newMessage = document.createElement("p")
    newMessage.textContent = result
    message.prepend(newMessage)
    endGame()
})

paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const humanChoice = "paper"
    let result = playRound(humanChoice, computerChoice)
    score.textContent = `Score ${humanScore} - ${computerScore}`

    let newMessage = document.createElement("p")
    newMessage.textContent = result
    message.prepend(newMessage)
    endGame()
})

scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const humanChoice = "scissors"
    let result = playRound(humanChoice, computerChoice)
    score.textContent = `Score ${humanScore} - ${computerScore}`

    let newMessage = document.createElement("p")
    newMessage.textContent = result
    message.prepend(newMessage)
    endGame()
})
