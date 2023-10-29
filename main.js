// Get references to HTML elements
let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Function to randomly select the computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function to handle a win
function win() {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = "You win!";
}
// Function to handle a loss
function lose() {
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.textContent = "You lose!";
}
// Function to handle a draw
function draw() {
    result_div.textContent = "It's a draw!";
}
// Function to play the game based on the choice of the user
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + " " + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            console.log("you wins")
            win();
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            console.log("you lost")
            lose();
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            console.log("draw")
            draw();
            break;
    }
}
// Function to call the event listeners

    function main() {
        rock_div.addEventListener('click', function () {
            game("rock");
        })

        paper_div.addEventListener('click', function () {
            game("paper");
        })

        scissors_div.addEventListener('click', function () {
            game('scissors');
        })
    }
// Call the function so i can setup the game
    main();