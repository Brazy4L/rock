// Array for words. Randomising Computer Choice

let words = ['Rock', 'Paper', 'Scissors'];
let computerPlay = words[Math.floor(Math.random() * words.length)];
const computerSelection = computerPlay;
// Player Choice

let playerPlay = prompt('Rock, Paper or Scissors?');
const playerSelection = playerPlay;

// Case-insensitive Player Input

function caseInsensitive(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

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

// Announcing Choices and Results

console.log('Player: ' + caseInsensitive(playerSelection));
console.log('Computer: ' + computerSelection);
console.log(playRound(caseInsensitive(playerSelection), computerSelection));