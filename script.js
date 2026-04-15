const buttons = document.querySelectorAll('button');
const div = document.querySelector('.display');
const resultText = document.createElement('p')
const playerCount = document.createElement('p');
const computerCount = document.createElement('p');

let playerSelection = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {

    let computerChoice = Math.floor((Math.random() * 10) + 1);
    if (computerChoice <= 3){
        return 'Rock';
    }else if(computerChoice > 3 && computerChoice <= 6) {
        return 'Paper'
    } else {
        return 'Scissors';
    }
   
}


function playRound (human, computer) {
        
    if(human === computer) {
            resultText.textContent = ('It is a Tie');
        }else if ((human === 'Rock' && computer === 'Scissors') ||
                  (human === 'Scissors' && computer === 'Paper') ||
                  (human === 'Paper' && computer === 'Rock')) {
                    humanScore++;
                    resultText.textContent = `You Win!: ${human} beats ${computer}`;
                    div.appendChild(resultText);
        } else {
            computerScore++;
            resultText.textContent = (`Computer win: ${computer} beats ${human}`);
            div.appendChild(resultText);
        } 

        playerCount.textContent = `Player Score: ${humanScore}`;
        div.appendChild(playerCount);

        computerCount.textContent = `Computer Score: ${computerScore}`
        div.appendChild(computerCount);

}

function playGame () {
    const gameText =  document.createElement('p')
    let humanSelection = playerSelection;
    let computerSelection = getComputerChoice();

    
   playRound(humanSelection, computerSelection)
    if(humanScore === 5) {
        gameText.textContent = 'You won the game refresh to play again.';
        div.appendChild(gameText);

   }else if (computerScore === 5) {
        gameText.textContent = 'Computer won the game refresh to play again.';
        div.appendChild(gameText);
   }

}

 buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        playGame();
        
    });

 });
