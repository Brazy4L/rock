// Array for words. Randomising computer choice

let words = ['Rock', 'Paper', 'Scissors'];
let computerPlay = words[Math.floor(Math.random() * words.length)]

const computerSelection = computerPlay;
const playerSelection = 'Rock';

// Case-insensitive for playerSelection

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Game

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
    } else {
        return 'Tie!'
    }
}

// Announcing Choices and Results

console.log('Player: ' + capitalize(playerSelection));
console.log('Computer: ' + computerSelection);
console.log(playRound(capitalize(playerSelection), computerSelection));