
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 9) + 1
    if (randomInt <= 6 && randomInt >= 4) {
        return "paper"
    }
    else if (randomInt <= 3) {
        return "scissors"
    }
    else {
        return "rock"
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Input either 'rock' 'paper' or 'scissors' to play.")
    return humanChoice
}
function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log(`Round ${i}`);
        playRound(computerSelection, humanSelection, humanScore, computerScore)
        console.log(`COMPUTER ${computerScore}`,"VS",`YOU ${humanScore}`);
    }


}

function playRound(computerChoice, humanChoice,humanScore, computerScore) {
    switch (computerChoice) {
        case "paper":
            switch (humanChoice) {
                case "rock":
                    console.log("You lose! Paper beats Rock");
                    computerScore++
                    break;
                case "paper":
                    console.log("It's a tie. Try again");
                    break;
                case "scissors":
                    console.log("You win! Scissors beats Paper");
                    humanScore++
                    break;

                default:
                    break;
            }
            break;
        case "rock":
            switch (humanChoice) {
                case "scissors":
                    console.log("You lose! Rock beats Scissors");
                    computerScore++
                    break;
                case "rock":
                    console.log("It's a tie. Try again");
                    break;
                case "paper":
                    console.log("You win! Paper beats Rock");
                    humanScore++
                    break;

                default:
                    break;
            }
            break;
        case "scissors":
            switch (humanChoice) {
                case "paper":
                    console.log("You lose! Scissors beats Paper");
                    computerScore++
                    break;
                case "scissors":
                    console.log("It's a tie. Try again");
                    break;
                case "rock":
                    console.log("You win! Rock beats Scissors");
                    humanScore++
                    break;

                default:
                    break;
            }
            break;

        default:
            break;
    }
}