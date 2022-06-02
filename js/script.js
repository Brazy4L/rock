// Case-Insensitive Player Input

function caseInsensitive(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Computer and Player Choice

let words = ['Rock', 'Paper', 'Scissors'];
let computerSelection = words[Math.floor(Math.random() * words.length)];
let playerSelection = caseInsensitive(prompt('Rock, Paper or Scissors?'));


// Game logic

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        return 'You Win! Rock beats Scissors';
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return 'You Win! Paper beats Rock';
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return 'You Win! Scissors beats Paper';
    } else if (computerSelection === 'Rock' && playerSelection === 'Rock') {
        return 'Draw!';
    } else if (computerSelection === 'Paper' && playerSelection === 'Paper') {
        return 'Draw!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Scissors') {
        return 'Draw!';
    } else {
        return 'Try again! Type: Rock, Paper or Scissors';
    }
}

// Game of 5 Rounds

function game() {

    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            console.log('<<< Round One! >>>');
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else if (i === 1) {
            playerSelection = caseInsensitive(prompt('Rock, Paper or Scissors?'));
            computerSelection = words[Math.floor(Math.random() * words.length)];
            console.log('<<< Round Two! >>>');
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else if (i === 2) {
            playerSelection = caseInsensitive(prompt('Rock, Paper or Scissors?'));
            computerSelection = words[Math.floor(Math.random() * words.length)];
            console.log('<<< Round Three! >>>');
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else if (i === 3) {
            playerSelection = caseInsensitive(prompt('Rock, Paper or Scissors?'));
            computerSelection = words[Math.floor(Math.random() * words.length)];
            console.log('<<< Round Four! >>>');
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else if (i === 4) {
            playerSelection = caseInsensitive(prompt('Rock, Paper or Scissors?'));
            computerSelection = words[Math.floor(Math.random() * words.length)];
            console.log('<<< Round Five! >>>');
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        }
    }
}

game()