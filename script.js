// gets a random number between 1 and 3
function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

//disables all event listeners so player cant press button until play again is clicked
function disableButtons() {
    rockBtn.removeEventListener('click', playRound);
    paperBtn.removeEventListener('click', playRound);
    scissorsBtn.removeEventListener('click', playRound);
}

// displays final winner to console
function displayWinner() {
    let winningMessage = document.createElement('p');
    let container = document.querySelector('.container');
    if (playerScore === 5) {
        winningMessage.innerText = "Congragulations, you beat the machine! Reload the page to play again";
        container.appendChild(winningMessage);
    } else {
        winningMessage.innerText = "Oooof... You lost to a computer... reload the page if you want to play again";
        container.appendChild(winningMessage);
    }

}

//determine winner based on player choice and computer's selection
function playRound() {

    // store both selections
    let playerSelection = this.id;
    let computerSelection = winningPairs[getRandomNumber()][0]

    // determine winner of single round
    if (winningPairs.find(el => el[0] === playerSelection && el[1] === computerSelection)) {
        playerScore += 1;
        playerScoreboard.innerText = playerScore;
        message.innerText = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === playerSelection) {
        message.innerText = `lame, you both chose ${playerSelection}`;
    } else {
        computerScore += 1;
        computerScoreboard.innerText = computerScore;
        message.innerText = `oh no, you lost! ${computerSelection} beats ${playerSelection}`;
    }
    // check if 5 has been reached, disable buttons and display final winner if so
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
        displayWinner();
    }
}

// variables to hold elements on page that display scores
const playerScoreboard = document.querySelector('.player-score');
const computerScoreboard = document.querySelector('.computer-score')

// selects each button on page and stores it in a variable
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// event listeners for each choice (rock, paper, scissors)
rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

// multidimensional array containing all possible winning pairs for game
const winningPairs = [
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper']
]

// variables for keeping track of scores
let playerScore = 0;
let computerScore = 0;

// selects and stores for game winner message output
const message = document.querySelector('.message');