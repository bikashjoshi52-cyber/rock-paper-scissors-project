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

function getHumanChoice() {
    let humanChoice = prompt('Enter Your Choice: Rock, Paper or Scissors');
    if(humanChoice === 'Rock') {
        return 'Rock';
    } else if (humanChoice === 'Paper') {
        return 'Paper'
    } else if (humanChoice === 'Scissors') {
        return 'Scissors'
    } else {
        return alert('Enter a valid choice.');
    }

}


function playGame (human, computer) {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

function playRound (human, computer) {
    if ((human === 'Rock' && computer === 'Scissors') ||
        (human === 'Scissors' && computer === 'Paper') ||
        (human === 'Paper' && computer === 'Rock')) {
        
            humanScore++;
            alert(`You win: ${human} beats ${computer}`);
        } else if ((computer === 'Rock' && human === 'Scissors') || 
                   (computer === 'Scissors' && human === 'Paper') ||
                   (computer === 'Paper' && human === 'Rock')) {
        
            computerScore++;
            alert(`Computer win: ${computer} beats ${human}`);
        } else if(human === computer) {
            alert('It is a Tie');
        }
}

    playRound(humanSelection, computerSelection);
}
playGame();
console.log(humanScore);
console.log(computerScore);



