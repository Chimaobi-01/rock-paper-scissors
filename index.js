playGame()




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

    if (humanChoice != 'paper' && humanChoice != 'rock' && humanChoice != 'scissors') {
        humanChoice = prompt('Input is invalid. Please provide a valid prompt. "ROCK","SCISSORS" or "PAPER"')
    }
    return humanChoice
}
function playGame() {
    let humanScore = 0
    let computerScore = 0
    let roundAvailable = 5
    let currentRound = 1


    alert('WELCOME TO ROCK, PAPER AND SCISSORS CONSOLE GAME')
    while (roundAvailable && confirm(`Begin round ${currentRound}. Rounds available: ${roundAvailable}`)) {
        let humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        if (!humanSelection) {
            alert('Game CANCELLED!')
            break
        }
        playRound(computerSelection, humanSelection)


        roundAvailable--
        currentRound++
    }


    if (roundAvailable < 1) {
        let result
        if (computerScore === humanScore) {
            result = `IT'S A TIE! ${computerScore}-${humanScore}`
        }
        else if (computerScore > humanScore) {
            result = `COMPUTER WINS!!! ${computerScore}-${humanScore}`
        }
        else {
            result = `HUMAN WINS!!! ${computerScore}-${humanScore}`
        }
        console.clear()
        console.log("*".repeat(9), "FINAL RESULT", "*".repeat(9))
        console.log(" ".repeat(6), result)
        alert(`\t\tGAME ENDED.\t\t\n\n ${result}`)
    }

    alert('Thank you for your time!')

    function playRound(computerChoice, humanChoice) {
        switch (computerChoice) {
            case "paper":
                switch (humanChoice) {
                    case "rock":
                        console.log("You lose! Paper beats Rock");
                        computerScore++
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "paper":
                        console.log("It's a tie. Try again");
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "scissors":
                        console.log("You win! Scissors beats Paper");
                        humanScore++
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
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
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "rock":
                        console.log("It's a tie. Try again");
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "paper":
                        console.log("You win! Paper beats Rock");
                        humanScore++
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
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
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "scissors":
                        console.log("It's a tie. Try again");
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;
                    case "rock":
                        console.log("You win! Rock beats Scissors");
                        humanScore++
                        console.log(`Scores: COMPUTER ${computerScore}-${humanScore} HUMAN`);
                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }
}
