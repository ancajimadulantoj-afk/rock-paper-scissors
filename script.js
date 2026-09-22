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

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let score = document.querySelector(".score")
let message = document.querySelector(".message")
