
function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function showScore() {
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`)
}


function playRound() {

    let playerSelection = prompt("Rock, Paper, or Scissors...What will it be?")
    if(playerSelection && playerSelection.length > 0) {
        playerSelection = playerSelection.toLowerCase();
    }

    let computerSelection = winningPairs[getRandomNumber()][0]

    if(winningPairs.find(el => el[0] === playerSelection && el[1] === computerSelection)) {
        return 'win'
    }
    else if(computerSelection === playerSelection) {
        return 'tie'
    }
    return 'lose'
}

function decideWinner(x, y) {
    if(x > y) {
        console.log("Congragulations, you beat the machine!")
    }
    else if (y > x) {
        console.log("You lost to a computer...")
    }
    else {
        console.log("you tied")
    }
}

function playGame() {

    showScore();

    for( let i = 0; i < 5; i++) {
        let outcome = playRound()
        if(outcome === 'win') {
            playerScore++;
            console.log(`You win!`)
            showScore(playerScore, computerScore);
        }
        else if(outcome === 'lose') {
            computerScore++;
            console.log(`You lose`)
            showScore(playerScore, computerScore);
        }
        else {
            console.log(`It's a tie`)
            showScore(playerScore, computerScore);
        }
    }

    decideWinner(playerScore, computerScore);
}

    const winningPairs = [
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ]

    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors...")
    console.log("Want to play a quick best of five?")
    let answer = prompt("Type yes to play");
    if(answer && answer.length > 0) {
        answer = answer.toLowerCase();
        playGame();
    }
