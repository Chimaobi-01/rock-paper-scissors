let humanScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')
const container = document.querySelector('#container')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
score.textContent = `${computerScore}:${humanScore}`

playGame()

score.addEventListener('change', e => {
    console.log(e.target.textContent);
})

function playGame() {

    container.addEventListener('click', e => {
        const button = e.target

        switch (button.textContent) {
            case "scissors":
                playRound(getComputerChoice(), button.textContent)
                if(score.textContent.split(':').find(i => Number(i) === 5)) 
                    endGame()
                message.style.visibility = 'visible'
                break;
            case "rock":
                playRound(getComputerChoice(), button.textContent)
                if(score.textContent.split(':').find(i => Number(i) === 5)) 
                    endGame()
                message.style.visibility = 'visible'
                break;
            case "paper":
                playRound(getComputerChoice(), button.textContent)
                if(score.textContent.split(':').find(i => Number(i) === 5)) 
                    endGame()
                message.style.visibility = 'visible'
                break;

            default:
                break;
        }
    })

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

    function playRound(computerChoice, humanChoice) {
        switch (computerChoice) {
            case "paper":
                switch (humanChoice) {
                    case "rock":
                        computerScore++
                        message.textContent = "You lose! Paper beats Rock"
                        message.style.color = "red"
                        score.textContent = `${computerScore}:${humanScore}`
                        break;
                    case "paper":
                        message.textContent = "It's a tie. You both picked Paper!"
                        message.style.color = "black"
                        break;
                    case "scissors":
                        humanScore++
                        message.textContent = "You win! Scissors beats Paper"
                        message.style.color = "green"
                        score.textContent = `${computerScore}:${humanScore}`
                        break;

                    default:
                        break;
                }
                break;
            case "rock":
                switch (humanChoice) {
                    case "scissors":
                        computerScore++
                        message.textContent = "You lose! Rock beats Scissors"
                        message.style.color = "red"
                        score.textContent = `${computerScore}:${humanScore}`
                        break;
                    case "rock":
                        message.textContent = "It's a tie. You both picked Rock!"
                        message.style.color = "black"
                        break;
                    case "paper":
                        humanScore++
                        message.textContent = "You win! Paper beats Rock"
                        message.style.color = "green"
                        score.textContent = `${computerScore}:${humanScore}`
                        break;

                    default:
                        break;
                }
                break;
            case "scissors":
                switch (humanChoice) {
                    case "paper":
                        computerScore++
                        message.textContent = "You lose! Scissors beats Paper"
                        message.style.color = "red"
                        score.textContent = `${computerScore}:${humanScore}`
                        break;
                    case "scissors":
                        message.textContent = "It's a tie. You both picked Scissors!"
                        message.style.color = "black"
                        break;
                    case "rock":
                        humanScore++
                        message.textContent = "You win! Rock beats Scissors"
                        message.style.color = "green"
                        score.textContent = `${computerScore}:${humanScore}`
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

function endGame() {
    const modal = document.createElement('div')
    const modalWrap = document.createElement('div')
    const playAgain = document.createElement('button')
    const status = document.createElement('h1')

    modal.classList.add('modal')
    modalWrap.classList.add('modal-wrap')
    status.classList.add('status')
    playAgain.classList.add('reset')

    playAgain.textContent = "Play Again"
    status.textContent = humanScore === 5 ? "you win!" : "computer wins!"

    modalWrap.appendChild(status)
    modalWrap.appendChild(playAgain)
    modal.appendChild(modalWrap)
    document.querySelector('body').appendChild(modal)

    playAgain.addEventListener('click', () => {
        document.querySelector('body').removeChild(modal)
        humanScore = 0
        computerScore = 0
        score.textContent = `${computerScore}:${humanScore}`
        message.style.visibility = 'hidden'
    })

}