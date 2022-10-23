const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const pcScoreEl = document.getElementById("pc-score")
const pcChoice = document.getElementById("pc-choice")
const playerNameEl = document.getElementById("player-name")
const playerScoreEl = document.getElementById("player-score")
const playerChoice = document.getElementById("player-choice")
const playArea = document.querySelector(".play-area")
const rockSymbol = '<i class="fa-solid fa-hand-back-fist"></i>'
const paperSymbol = '<i class="fa-solid fa-hand"></i>'
const scissorsSymbol = '<i class="fa-solid fa-hand-scissors"></i>'
const array = [rockSymbol,paperSymbol,scissorsSymbol]

let pcScore = 0
let playerScore = 0
let playerWin = false
let pcWin = false

let playerName = prompt("What's your name?", "player 1").toUpperCase()
playerNameEl.textContent = playerName.toUpperCase()

function renderGame() {

    if (playerChoice.innerHTML == rockSymbol &&
        pcChoice.innerHTML == scissorsSymbol) {
            playerScore++
        } else if (playerChoice.innerHTML == paperSymbol &&
            pcChoice.innerHTML == rockSymbol) {
                playerScore++
        } else if (playerChoice.innerHTML == scissorsSymbol &&
            pcChoice.innerHTML == paperSymbol) {
                playerScore++
        } else if (pcChoice.innerHTML == rockSymbol &&
            playerChoice.innerHTML == scissorsSymbol) {
                pcScore++
        } else if (pcChoice.innerHTML == paperSymbol &&
            playerChoice.innerHTML == rockSymbol) {
                pcScore++
        } else if (pcChoice.innerHTML == scissorsSymbol &&
            playerChoice.innerHTML == paperSymbol) {
                pcScore++
            }

    renderScore()
}

function renderScore() {
    playerScoreEl.textContent = playerScore
    pcScoreEl.textContent = pcScore
    checkWinner()
}

function checkWinner() {
    if (playerScore == 5) {
        playArea.innerHTML = `
        <section class="play-area">
                <article id="pc-choice"> 
                </article>
                <span id="vs-el">${playerName} Won!</span>
                <article id="player-choice">    
                </article>
            </section>
        `
    } else  if (pcScore == 5) {
        playArea.innerHTML = `
        <section class="play-area">
                <article id="pc-choice"> 
                </article>
                <span id="vs-el">A.I Won!</span>
                <article id="player-choice">    
                </article>
            </section>
        `
    }

}


rockBtn.addEventListener("click", () => {
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
    playerChoice.innerHTML = `${rockSymbol}`
    renderGame()
})
paperBtn.addEventListener("click", () => {
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
    playerChoice.innerHTML = `${paperSymbol}`
    renderGame()
})
scissorsBtn.addEventListener("click", () => {
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
    playerChoice.innerHTML = `${scissorsSymbol}`
    renderGame()
})
