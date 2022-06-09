const words = ['Rock', 'Paper', 'Scissors'];
let computerSelection = '';
let playerSelection = '';

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const result = document.querySelector('#result');
const currentPlayerScore = document.querySelector('#currentPlayerScore');
const currentComputerScore = document.querySelector('#currentComputerScore');
const winner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

// Game stats, Player and Computer selections on click

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function () {
    playerSelection = button.textContent;
    computerSelection = words[Math.floor(Math.random() * words.length)];
    player.textContent = ('Player: ' + playerSelection);
    computer.textContent = ('Computer: ' + computerSelection);
    result.textContent = game(playerSelection, computerSelection);
    currentPlayerScore.textContent = ('Player Score: ' + playerScore);
    currentComputerScore.textContent = ('Computer Score: ' + computerScore);
    winner.textContent = '';
    keepingScore();
    winnerCheck();
}));

function game(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You Lose!';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You Lose!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You Lose!';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        return 'You Win!';
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return 'You Win!';
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return 'You Win!';
    } else {
        return 'Draw!';
}};

function keepingScore() {
    if (result.textContent.includes('Win')) {
        currentPlayerScore.textContent = ('Player Score: ' + ++playerScore);
    } else if (result.textContent.includes('Lose')) {
        currentComputerScore.textContent = ('Computer Score: ' + ++computerScore);
    } else if (result.textContent.includes('Draw')) {
        currentPlayerScore.textContent = ('Player Score: ' + ++playerScore);
        currentComputerScore.textContent = ('Computer Score: ' + ++computerScore);
}};

function winnerCheck() {
    if (playerScore === 5 && computerScore === 5) {
        winner.textContent = 'Tie! 5 - 5';
        playerScore = 0;
        computerScore = 0;
        currentPlayerScore.textContent = ('Player Score: ' + playerScore);
        currentComputerScore.textContent = ('Computer Score: ' + computerScore);
    } else if (playerScore === 5) {
        winner.textContent = `You Won! 5 - ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
        currentPlayerScore.textContent = ('Player Score: ' + playerScore);
        currentComputerScore.textContent = ('Computer Score: ' + computerScore);
    } else if (computerScore === 5) {
        winner.textContent = `You Lost! ${playerScore} - 5`;
        playerScore = 0;
        computerScore = 0;
        currentPlayerScore.textContent = ('Player Score: ' + playerScore);
        currentComputerScore.textContent = ('Computer Score: ' + computerScore);
}};