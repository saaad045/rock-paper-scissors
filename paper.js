console.log("hello");
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.querySelector('#rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const gameResult_div = document.getElementById('game-result');


console.log(rock_div);
console.log(computerScore_span);
console.log(result_div);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertCase(userChoice) {
    if (userChoice === 'paper') return 'Paper';
    if (userChoice === 'scissors') return 'Scissors';
    return 'Rock';
}

function win(user, computer) {
    console.log('user wins');
    userScore++;
    userScore_span.innerHTML = userScore;
    const userName = '(user)'.fontsize(3).sup();
    const computerName = '(computer)'.fontsize(3).sup();

    result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${computerName}. You win!</p>`;

    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function lose(user, computer) {
    console.log('user loses');
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userName = ' (user)'.fontsize(3).sup();
    const computerName = ' (computer)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(computer)}${computerName} beats ${convertCase(user)}${userName}. You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

function draw(user, computer) {
   
    console.log('draw');
    const userName = ' (user)'.fontsize(3).sup();
    const computerName = ' (computer)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It's a draw! You both chose ${convertCase(user)}${userName}.</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

function game(userChoice) {
    if (userScore === 10 || computerScore === 10) {
        if (userScore === 10) {
			gameResult_div.innerHTML = '<p>Congratulations! You won the game!</p>';
		} 
		if (computerScore === 10) {
					 gameResult_div.innerHTML = '<p>Sorry, the computer won the game.</p>';

		}
		return;
    }
    const computerChoice = getComputerChoice();
    console.log({ userChoice, computerChoice });
    console.log(userChoice + computerChoice);
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function startNewGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = '0';
    computerScore_span.innerHTML = '0';
    result_div.innerHTML = '';
    newGameButton.style.display = 'none';
    gameResult_div.innerHTML = ''; 

    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
}

function main() {
    const newGameButton = document.getElementById('new-game');
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    newGameButton.addEventListener('click', startNewGame);
}

main();
